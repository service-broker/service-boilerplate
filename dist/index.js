"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const service_broker_1 = require("./common/service-broker");
const service_manager_1 = require("./common/service-manager");
const config_1 = require("./config");
service_broker_1.default.advertise(config_1.default.service, onRequest);
(0, service_manager_1.addShutdownHandler)(onShutdown);
function onRequest(req) {
    return {
        payload: req.payload
    };
}
function onShutdown() {
}
