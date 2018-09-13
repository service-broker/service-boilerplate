import { advertise, Message } from "./common/service-broker"
import { addShutdownHandler } from "./common/service-manager"
import logger from "./common/logger"
import config from "./config"

advertise(config.service, onRequest);
addShutdownHandler(onShutdown);


function onRequest(req: Message): Message|Promise<Message> {
  return {
    header: {
      to: req.header.from
    },
    payload: req.payload
  }
}

function onShutdown(): Promise<void> {
  logger.info("Shutdown request received");
  return Promise.resolve();
}
