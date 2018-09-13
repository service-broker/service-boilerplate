"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const service_broker_1 = require("./common/service-broker");
const logger_1 = require("./common/logger");
const config_1 = require("./config");
service_broker_1.advertise(config_1.default.service, onRequest);
service_broker_1.addShutdownHandler(onShutdown);
function onRequest(req) {
    return {
        header: {
            to: req.header.from
        },
        payload: req.payload
    };
}
function onShutdown() {
    logger_1.default.info("Shutdown request received");
    return Promise.resolve();
}
