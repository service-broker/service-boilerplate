import { request, Message, shutdown } from "./common/service-broker"

beforeAll(() => {
  require("./index");
})

afterAll(() => {
  return shutdown();
})


test("echo service", async () => {
  await expect(request({name: "echo"}, {payload: "hello, world!"})).resolves.toHaveProperty("payload", "hello, world!");
})
