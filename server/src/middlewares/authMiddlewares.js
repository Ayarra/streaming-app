const { body } = require("express-validator");

exports.registerValidation = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email address")
    .isLength({ max: 255 })
    .withMessage("Email must be at most 255 characters long"),
  body("username")
    .trim()
    .notEmpty()
    .withMessage("Username is required")
    .isLength({ max: 50 })
    .withMessage("Username must be at most 50 characters long"),
  body("firstName")
    .trim()
    .notEmpty()
    .withMessage("First name is required")
    .isLength({ max: 50 })
    .withMessage("First name must be at most 50 characters long"),
  body("lastName")
    .trim()
    .notEmpty()
    .withMessage("Last name is required")
    .isLength({ max: 50 })
    .withMessage("Last name must be at most 50 characters long"),
  body("password")
    .trim()
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6, max: 255 })
    .withMessage("Password must be between 6 and 50 characters long"),
  body("passwordConfirmation").custom((value, { req }) => {
    if (!value) throw new Error("Confirmation password is required");
    if (value !== req.body.password)
      throw new Error("Password confirmation does not match password");
    return true;
  }),
];
