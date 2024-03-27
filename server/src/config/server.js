const express = require("express");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");

// Routes imports
const authRoutes = require("../routes/authRoutes");
const moviesRoutes = require("../routes/moviesRoutes");

function createServer() {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cors());

  app.use(
    session({
      secret: process.env.SESSION_SECRET, // Replace with a strong secret key
      resave: false,
      saveUninitialized: true,
    })
  );

  // Initialize Passport and restore authentication state from the session
  app.use(passport.initialize());
  app.use(passport.session());

  // USE Routes
  app.use("/auth", authRoutes);
  app.use("/movies", moviesRoutes);

  return app;
}

module.exports = createServer;
