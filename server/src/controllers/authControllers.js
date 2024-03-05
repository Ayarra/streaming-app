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
        id: newUser._id,
      };
      res.status(201).json({ message: "User created", user: userResponse });
    } catch (error) {
      let errorMessage = "Failed to create user";
      if (error.message.includes("Email")) {
        errorMessage = "Email already exists";
      }
      res.status(400).json({ errors: errorMessage });
    }
  } catch (error) {
    res.status(500).json({ error: "An unexpected error occurred." });
  }
};

exports.login = async (req, res) => {
  try {
    
  } catch (error) {
    res.status(500).json({ error: "An unexpected error occurred." });
  }
};
