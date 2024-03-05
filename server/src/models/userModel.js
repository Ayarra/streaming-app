const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, maxLength: 255 },
  username: { type: String, required: true, unique: true, maxLength: 50 },
  password: { type: String, required: true, maxLength: 255 },
  firstName: { type: String, required: true, maxLength: 50 },
  lastName: { type: String, required: true, maxLength: 50 },
});

module.exports = mongoose.model("User", UserSchema);
