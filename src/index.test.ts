import sb from "./common/service-broker"
import { shutdown } from "./common/service-manager"
import "./index"

afterAll(shutdown)


test("echo service", async () => {
  await expect(sb.request({name: "echo"}, {payload: "hello, world!"})).resolves.toHaveProperty("payload", "hello, world!");
})
