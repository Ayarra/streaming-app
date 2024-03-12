const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, maxLength: 50 },
  email: { type: String, unique: true, sparse: true, maxLength: 255 },
  password: { type: String, required: true, maxLength: 255 },
  firstName: { type: String, maxLength: 50 },
  lastName: { type: String, maxLength: 50 },
  photo: String,
  facebookId: String,
  googleId: String,
  githubId: String,
});

UserSchema.index({ email: 1 }, { unique: true, sparse: true });

module.exports = mongoose.model("User", UserSchema);
