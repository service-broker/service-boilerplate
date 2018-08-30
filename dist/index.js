"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const service_broker_1 = require("./common/service-broker");
const config_1 = require("./config");
service_broker_1.advertise(config_1.default.service, onRequest);
function onRequest(req) {
    return {
        header: {
            to: req.header.from
        },
        payload: req.payload
    };
}
