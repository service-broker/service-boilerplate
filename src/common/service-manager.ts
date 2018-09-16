import * as sb from "./service-broker"
import logger from "./logger"
import config from "../config"

let checkInTimer: NodeJS.Timer;
const shutdownHandlers: Array<() => Promise<void>> = [];

sb.setServiceHandler("service-manager-client", onRequest);
if (config.siteName && config.serviceName) {
  checkIn();
  checkInTimer = setInterval(checkIn, 30*1000);
}



function onRequest(req: sb.Message): Promise<sb.Message> {
  if (req.header.method == "shutdown") return shutdown(req);
  else throw new Error("Unknown method " + req.header.method);
}

async function shutdown(req: sb.Message): Promise<sb.Message> {
  if (req.header.pid != process.pid) throw new Error("pid incorrect");
  for (const handler of shutdownHandlers) await handler();
  clearInterval(checkInTimer);
  setTimeout(sb.shutdown, 1000);
  return {};
}

function checkIn() {
  sb.notify({name: "service-manager"}, {
    header: {
      method: "serviceCheckIn",
      args: {
        siteName: config.siteName,
        serviceName: config.serviceName,
        pid: process.pid
      }
    }
  })
  .catch(logger.error)
}


export function addShutdownHandler(handler: () => Promise<void>) {
  shutdownHandlers.push(handler);
}
