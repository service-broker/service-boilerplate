import { Message } from "@service-broker/service-broker-client";
import sb from "./common/service-broker";
import { addShutdownHandler } from "./common/service-manager";
import config from "./config";

sb.advertise(config.service, onRequest);
addShutdownHandler(onShutdown);


function onRequest(req: Message): Message|Promise<Message> {
  return {
    payload: req.payload
  }
}

function onShutdown() {
}
