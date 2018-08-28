"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
exports.default = {
    serviceBrokerUrl: process.env.SERVICE_BROKER_URL,
    // the service provided by this module
    service: {
        name: "echo",
        capabilities: null,
        priority: 100
    }
};
