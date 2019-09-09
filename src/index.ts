import logger from "./common/logger";
import sb, { Message } from "./common/service-broker";
import { addShutdownHandler } from "./common/service-manager";
import config from "./config";

sb.advertise(config.service, onRequest);
addShutdownHandler(onShutdown);


function onRequest(req: Message): Message|Promise<Message> {
  return {
    payload: req.payload
  }
}

function onShutdown(): Promise<void> {
  logger.info("Shutdown request received");
  return Promise.resolve();
}
