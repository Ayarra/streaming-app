const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

exports.registerUser = async (userPayload) => {
  // Check no duplicate emails exist
  const existingUser = await User.findOne({ email: userPayload.email }).exec();
  if (existingUser) throw new Error("Email already exists");

  //   Create new user
  try {
    const hashedPassword = await bcrypt.hash(userPayload.password, 12);
    const user = new User({
      email: userPayload.email,
      username: userPayload.username,
      firstName: userPayload.firstName,
      lastName: userPayload.lastName,
      password: hashedPassword,
    });
    await user.save();
    return user;
  } catch (error) {
    throw error;
  }
};
