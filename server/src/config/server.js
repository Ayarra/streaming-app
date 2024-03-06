const express = require("express");

// Routes imports
const authRoutes = require("../routes/authRoutes");

function createServer() {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // USE Routes
  app.use("/auth", authRoutes);

  return app;
}

module.exports = createServer;
