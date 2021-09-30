"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const service_broker_1 = require("./common/service-broker");
const service_manager_1 = require("./common/service-manager");
require("./index");
afterAll(service_manager_1.shutdown);
test("echo service", async () => {
    await expect(service_broker_1.default.request({ name: "echo" }, { payload: "hello, world!" })).resolves.toHaveProperty("payload", "hello, world!");
});
