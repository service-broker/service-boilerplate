import { advertise, Message } from "./common/service-broker"
import config from "./config"

advertise(config.service.name, config.service.capabilities, config.service.priority, onRequest);


function onRequest(req: Message): Message|Promise<Message> {
  return {
    header: {
      to: req.header.from
    },
    payload: req.payload
  }
}
