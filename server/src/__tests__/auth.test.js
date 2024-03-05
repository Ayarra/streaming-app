const request = require("supertest");
const createServer = require("../utils/server");

const app = createServer();

describe("auth", () => {
  describe("user registration", () => {
    describe("given one of the fields is missing", () => {
      it.todo("should return 400 with an error message");
    });

    describe("given the username already exists", () => {
      it.todo("should return 409 with an error message");
    });

    describe("given the email already exists", () => {
      it.todo("should return 409 with an error message");
    });

    describe("given one of the fields is invalid", () => {
      it.todo("should return 400 with an error message");
    });

    describe("given the passwords do not match", () => {
      it.todo("should return 400 with an eroor message");
    });

    describe("given all the fields valid", () => {
      it.todo(
        "should return 201 with a success message"
        // , async () => {
        //   const response = await request(app).post("/auth/register");

        //   expect(response.body).toEqual({ message: "User created successfully" });
        //   expect(response.statusCode).toBe(201);
        // }
      );
    });
  });
});
