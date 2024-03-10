const authServices = require("../services/authServices");
const { validationResult } = require("express-validator");

exports.register = async (req, res) => {
  try {
    // Body validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const validationErrors = [];
      errors.array().forEach((error) => {
        validationErrors.push(error.msg);
      });
      return res.status(400).json({ errors: validationErrors });
    }

    // Create new user
    try {
      const newUser = await authServices.registerUser(req.body);
      const userResponse = {
        username: newUser.username,
        email: newUser.email,
        _id: newUser._id,
      };
      res.status(201).json({ message: "User created", user: userResponse });
    } catch (error) {
      let errorMessage = "Failed to create user";
      if (
        error.message.includes("Email") ||
        error.message.includes("Username")
      ) {
        errorMessage = error.message;
        res.status(409);
      } else res.status(400);
      res.json({ errors: errorMessage });
    }
  } catch (error) {
    res.status(500).json({ error: "An unexpected error occurred." });
  }
};

exports.login = async (req, res) => {
  try {
    const loginResponse = await authServices.loginUser(req.body);
    res.status(200).json(loginResponse);
  } catch (error) {
    
    let errorMessage = "Failed to login user";

    if (error.message.includes("User")) {
      errorMessage = "User with this email/username not found";
      res.status(404).json({ errors: errorMessage });
    } else if (error.message.includes("password")) {
      errorMessage = "You entered the wrong password";
      res.status(401).json({ errors: errorMessage });
    } else res.status(500).json({ error: "An unexpected error occurred." });
  }
};

exports.facebookLogin = async (req, res) => {
  try {
    const userPayload = {
      email: req.user.email,
      // You can add additional fields if needed, like password (for Facebook users, you can set a default password)
    };

    // Use your existing loginUser function to generate a JWT token
    const loginResponse = await authServices.loginUser(userPayload);
    res.status(200).json(loginResponse);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
