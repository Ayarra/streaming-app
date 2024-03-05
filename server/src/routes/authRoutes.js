const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/authControllers");

const { registerValidation } = require("../middlewares/authMiddlewares");

router.post("/register", registerValidation, authControllers.register);
router.post("/login", registerValidation, authControllers.login);

module.exports = router;
