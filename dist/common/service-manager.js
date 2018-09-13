"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sb = require("./service-broker");
const logger_1 = require("./logger");
const config_1 = require("../config");
const shutdownHandlers = [];
sb.setServiceHandler("service-manager-client", onRequest);
if (config_1.default.siteName && config_1.default.serviceName)
    setInterval(checkIn, 30 * 1000);
function onRequest(req) {
    if (req.header.method == "shutdown")
        return shutdown(req);
    else
        throw new Error("Unknown method " + req.header.method);
}
async function shutdown(req) {
    if (req.header.pid != process.pid)
        throw new Error("pid incorrect");
    for (const handler of shutdownHandlers)
        await handler();
    setTimeout(sb.shutdown, 1000);
    return {};
}
function checkIn() {
    sb.notify({ name: "service-manager" }, {
        header: {
            method: "serviceCheckIn",
            args: {
                siteName: config_1.default.siteName,
                serviceName: config_1.default.serviceName,
                pid: process.pid
            }
        }
    })
        .catch(logger_1.default.error);
}
function addShutdownHandler(handler) {
    shutdownHandlers.push(handler);
}
exports.addShutdownHandler = addShutdownHandler;
