"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
(0, assert_1.default)(process.env.SERVICE_BROKER_URL, "Missing env SERVICE_BROKER_URL");
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
