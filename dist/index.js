"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("./common/logger"));
const service_broker_1 = __importDefault(require("./common/service-broker"));
const service_manager_1 = require("./common/service-manager");
const config_1 = __importDefault(require("./config"));
service_broker_1.default.advertise(config_1.default.service, req => {
    logger_1.default.debug('Echoing', req);
    return {
        payload: req.payload
    };
});
(0, service_manager_1.addShutdownHandler)(() => {
    logger_1.default.debug("Quitting");
});
