import { request, Message, shutdown } from "./common/service-broker"

beforeAll(() => {
  require("./index");
})

afterAll(() => {
  return shutdown();
})


test("echo service", async () => {
  await expect(request("echo", null, {payload: "hello, world!"})).resolves.toHaveProperty("payload", "hello, world!");
})
