import logger from "./common/logger";
import sb from "./common/service-broker";
import { addShutdownHandler } from "./common/service-manager";
import config from "./config";

sb.advertise(config.service, req => {
  logger.debug('Echoing', req)
  return {
    payload: req.payload
  }
})

addShutdownHandler(() => {
  logger.debug("Quitting")
})
