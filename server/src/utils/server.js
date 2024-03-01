const express = require("express");
const usersRouter = require("../controllers/usersController");

function createServer() {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use("/users", usersRouter);
  return app;
}

module.exports = createServer;
