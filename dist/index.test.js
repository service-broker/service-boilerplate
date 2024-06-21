"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const service_broker_1 = __importDefault(require("./common/service-broker"));
const service_manager_1 = require("./common/service-manager");
require("./index");
service_broker_1.default.request({ name: "echo" }, { payload: "hello, world!" })
    .then(res => assert_1.default.strictEqual(res.payload, "hello, world!"))
    .then(() => console.log("Test successful"))
    .catch(console.error)
    .finally(service_manager_1.shutdown);
