"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const service_broker_1 = require("./common/service-broker");
beforeAll(() => {
    require("./index");
});
afterAll(() => {
    return service_broker_1.shutdown();
});
test("echo service", async () => {
    await expect(service_broker_1.request("echo", null, { payload: "hello, world!" })).resolves.toHaveProperty("payload", "hello, world!");
});
