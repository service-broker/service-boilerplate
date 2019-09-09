import * as dotenv from "dotenv"

dotenv.config();

if (!process.env.SERVICE_BROKER_URL) throw new Error("Missing env SERVICE_BROKER_URL");

export default {
  // service broker info
  serviceBrokerUrl: process.env.SERVICE_BROKER_URL,

  // service deployment info
  siteName: process.env.SITE_NAME,
  serviceName: process.env.SERVICE_NAME,

  // the service provided by this module
  service: {
    name: "echo",
    capabilities: undefined,
    priority: 100
  }
}
