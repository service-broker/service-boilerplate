import sb from "./common/service-broker"
import "./index"

afterAll(() => sb.shutdown());


test("echo service", async () => {
  await expect(sb.request({name: "echo"}, {payload: "hello, world!"})).resolves.toHaveProperty("payload", "hello, world!");
})
