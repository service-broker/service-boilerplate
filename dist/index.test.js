"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const service_broker_1 = require("./common/service-broker");
require("./index");
afterAll(() => service_broker_1.default.shutdown());
test("echo service", async () => {
    await expect(service_broker_1.default.request({ name: "echo" }, { payload: "hello, world!" })).resolves.toHaveProperty("payload", "hello, world!");
});
