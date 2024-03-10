const User = require("../models/userModel");

exports.generateUsername = async (displayName) => {
  let username = displayName || "";
  username = username.replace(/\s/g, "");

  let randomID = Math.random().toString(36).substring(2, 15);

  const existingUsername = await User.findOne({
    username: username + randomID,
  });

  while (existingUsername) {
    randomID = Math.random().toString(36).substring(2, 15);
    existingUsername = await User.findOne({
      username: username + randomID,
    });
  }

  return username + randomID;
};

exports.generatePassword = async () => {
  return Math.random().toString(36).substring(2, 15);
};
