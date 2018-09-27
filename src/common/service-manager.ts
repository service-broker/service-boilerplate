import config from "../config";
import logger from "./logger";
import sb, { Message } from "./service-broker";

let checkInTimer: NodeJS.Timer;
const shutdownHandlers: Array<() => Promise<void>> = [];

sb.setServiceHandler("service-manager-client", onRequest);
if (config.siteName && config.serviceName) {
  checkIn();
  checkInTimer = setInterval(checkIn, 30*1000);
}



function onRequest(req: Message): Promise<Message> {
  if (req.header.method == "shutdown") return shutdown(req);
  else throw new Error("Unknown method " + req.header.method);
}

async function shutdown(req: Message): Promise<Message> {
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
