import * as dotenv from "dotenv"

dotenv.config();

export default {
  serviceBrokerUrl: process.env.SERVICE_BROKER_URL,
  
  // the service provided by this module
  service: {
    name: "echo",
    capabilities: <string[]> null,
    priority: 100
  }
}
