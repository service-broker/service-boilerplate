import * as dotenv from "dotenv"

dotenv.config();

export default {
  serviceBrokerAddress: process.env.SERVICE_BROKER_ADDRESS,
  
  // the service provided by this module
  service: {
    name: "echo",
    capabilities: null,
    priority: 100
  }
}
