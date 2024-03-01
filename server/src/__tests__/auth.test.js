const agent = require("supertest");
const createServer = require("../utils/server");

const app = createServer();

describe("register auth", () => {
  describe("given all fields exist", () => {
    it("should return 200", async () => {
      await agent(app).get("/users").expect({ msg: "hello" });
    });
  });
});
