"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
exports.default = {
    serviceBrokerAddress: process.env.SERVICE_BROKER_ADDRESS,
    // the service provided by this module
    service: {
        name: "echo",
        capabilities: null,
        priority: 100
    }
};
