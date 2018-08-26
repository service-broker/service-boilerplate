"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sb = require("./service-broker");
afterAll(() => {
    sb.shutdown();
});
test("pub/sub", async () => {
    const queue = new Queue();
    sb.subscribe("test-log", msg => queue.push(msg));
    sb.publish("test-log", "what in the world");
    expect(await queue.shift()).toBe("what in the world");
});
test("request/response", async () => {
    const queue = new Queue();
    sb.advertise("test-tts", ["v1", "v2"], 1, msg => {
        queue.push(msg);
        return {
            header: { result: 1 },
            payload: Buffer.from("this is response payload")
        };
    });
    let promise = sb.request("test-tts", ["v1"], {
        header: { lang: "vi" },
        payload: "this is request payload"
    });
    expect(await queue.shift()).toEqual({
        header: {
            from: expect.any(String),
            id: expect.any(String),
            type: "ServiceRequest",
            service: {
                name: "test-tts",
                capabilities: ["v1"]
            },
            lang: "vi"
        },
        payload: "this is request payload"
    });
    expect(await promise).toEqual({
        header: {
            from: expect.any(String),
            to: expect.any(String),
            id: expect.any(String),
            type: "ServiceResponse",
            result: 1
        },
        payload: Buffer.from("this is response payload")
    });
    try {
        await sb.request("test-tts", ["v3"], {
            header: { lang: "en" },
            payload: "this is request payload"
        });
    }
    catch (err) {
        expect(err.message).toMatch("No provider");
    }
});
class Queue {
    constructor() {
        this.items = [];
        this.waiters = [];
    }
    push(value) {
        this.items.push(value);
        while (this.items.length && this.waiters.length)
            this.waiters.shift().fulfill(this.items.shift());
    }
    shift() {
        if (this.items.length)
            return this.items.shift();
        else
            return new Promise(fulfill => this.waiters.push({ fulfill }));
    }
}
