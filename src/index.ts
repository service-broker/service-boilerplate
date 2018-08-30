import { advertise, Message } from "./common/service-broker"
import config from "./config"

advertise(config.service, onRequest);


function onRequest(req: Message): Message|Promise<Message> {
  return {
    header: {
      to: req.header.from
    },
    payload: req.payload
  }
}
