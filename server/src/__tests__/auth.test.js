const request = require("supertest");
const createServer = require("../config/server");
const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoose = require("mongoose");
const userPayload = require("../utils/test-data");
const User = require("../models/userModel");

const app = createServer();

describe("auth", () => {
  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create();

    await mongoose.connect(mongoServer.getUri());
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
  });

  describe("user registration", () => {
    describe("given one of the fields is invalid", () => {
      it("should return 400 with an error message", async () => {
        const testUser = userPayload.registerInvalidUser;
        const response = await request(app)
          .post("/auth/register")
          .send(testUser);

        expect(response.body).toEqual({
          errors: [
            "Username is required",
            "First name is required",
            "Last name is required",
          ],
        });
        expect(response.statusCode).toBe(400);
      });
    });

    describe("given the passwords do not match", () => {
      it("should return 400 with an eroor message", async () => {
        const testUser = userPayload.registerInvalidPasswordUser;
        const response = await request(app)
          .post("/auth/register")
          .send(testUser);

        expect(response.body).toEqual({
          errors: ["Password confirmation does not match password"],
        });
        expect(response.statusCode).toBe(400);
      });
    });

    describe("given all the fields valid", () => {
      it("should return 201 with a success message", async () => {
        const testUser = userPayload.registerValidUser;
        const response = await request(app)
          .post("/auth/register")
          .send(testUser);

        expect(response.body).toEqual({
          message: "User created",
          user: {
            username: testUser.username,
            email: testUser.email,
            _id: expect.any(String),
          },
        });
        expect(response.statusCode).toBe(201);
      });
    });

    describe("given the email already exists", () => {
      it("should return 409 with an error message", async () => {
        const testUser = userPayload.registerValidUser;
        const response = await request(app)
          .post("/auth/register")
          .send(testUser);

        expect(response.body).toEqual({
          errors: "Email already exists",
        });
        expect(response.statusCode).toBe(409);
      });
    });
  });
  describe("user login", () => {
    describe("given all credentials are valid", () => {
      it("should return 200 with a success message", async () => {
        const testUser = userPayload.loginValidUser;

        const { username } = await User.findOne({
          email: testUser.email,
        }).exec();
        const response = await request(app).post("/auth/login").send(testUser);

        expect(response.body).toEqual({
          user: {
            _id: expect.any(String),
            email: testUser.email,
            username: username,
          },
          token: expect.any(String),
          expiresIn: expect.any(String),
        });
        expect(response.statusCode).toBe(200);
      });
    });
    describe("given a wrong email address", () => {
      it("should return 404 with an error message", async () => {
        const testUser = userPayload.loginInvalidEmailUser;

        const response = await request(app).post("/auth/login").send(testUser);

        expect(response.body).toEqual({
          errors: "User with this email not found",
        });
        expect(response.statusCode).toBe(404);
      });
    });
    describe("given a wrong password", () => {
      it("should return 404 with an error message", async () => {
        const testUser = userPayload.loginInvalidPasswordUser;

        const response = await request(app).post("/auth/login").send(testUser);

        expect(response.body).toEqual({
          errors: "You entered the wrong password",
        });
        expect(response.statusCode).toBe(401);
      });
    });
  });
});
