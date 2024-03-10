const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const { issueJWT } = require("../utils/jwt-utils");

exports.registerUser = async (userPayload) => {
  const { email, username } = userPayload;
  // Check no duplicate emails exist

  const existingUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existingUser)
    if (existingUser.username === username) {
      throw new Error("Username already exists");
    } else if (existingUser.email === email) {
      throw new Error("Email already exists");
    }

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

exports.loginUser = async (userPayload) => {
  const { email, username, password } = userPayload;
  //   Look for user
  const existingUser = await User.findOne({
    $or: [{ username }, { email }],
  });
  if (!existingUser) throw new Error("User with this email/username not found");

  //   Match user password
  const match = await bcrypt.compare(password, existingUser.password);
  if (match) {
    const tokenObject = issueJWT(existingUser);
    return {
      user: {
        _id: existingUser._id,
        username: existingUser.username,
      },
      token: tokenObject.token,
      expiresIn: tokenObject.expires,
    };
  } else throw new Error("You entered the wrong password");
};
