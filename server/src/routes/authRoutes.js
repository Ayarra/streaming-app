const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/authControllers");
const { registerValidation } = require("../middlewares/authMiddlewares");
const passport = require("../config/passport");

router.post("/register", registerValidation, authControllers.register);
router.post("/login", authControllers.login);

// Facbook login
router.get("/facebook", passport.authenticate("facebook"));
router.get(
  "/facebook/callback",
  passport.authenticate("facebook", { failureRedirect: "/auth/login" }),
  authControllers.facebookLogin
);

// Google Login
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "auth/login" }),
  authControllers.googleLogin
);
module.exports = router;
