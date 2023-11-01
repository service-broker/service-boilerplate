"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const dotenv = require("dotenv");
dotenv.config();
assert(process.env.SERVICE_BROKER_URL, "Missing env SERVICE_BROKER_URL");
exports.default = {
    // service broker info
    serviceBrokerUrl: process.env.SERVICE_BROKER_URL,
    // service deployment info
    siteName: process.env.SITE_NAME,
    serviceName: process.env.SERVICE_NAME,
    deploymentSecret: process.env.DEPLOYMENT_SECRET,
    // the service provided by this module
    service: {
        name: "echo",
        capabilities: undefined,
        priority: 100
    }
};
