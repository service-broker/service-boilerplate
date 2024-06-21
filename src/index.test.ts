import assert from "assert"
import sb from "./common/service-broker"
import { shutdown } from "./common/service-manager"
import "./index"

sb.request({name: "echo"}, {payload: "hello, world!"})
  .then(res => assert.strictEqual(res.payload, "hello, world!"))
  .then(() => console.log("Test successful"))
  .catch(console.error)
  .finally(shutdown)
