const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/authControllers");
const { registerValidation } = require("../middlewares/authMiddlewares");
const passport = require("../config/passport");

router.post("/register", registerValidation, authControllers.register);
router.post("/login", authControllers.login);
router.get("/facebook", passport.authenticate("facebook"));

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", { failureRedirect: "/auth/login" }),
  authControllers.facebookLogin
);
module.exports = router;
