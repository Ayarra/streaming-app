/*
 * REGISTER TEST PAYLOADS
 */

exports.registerValidUser = {
  email: "test@test.com",
  username: "johndoe",
  firstName: "john",
  lastName: "doe",
  password: "password@@!",
  passwordConfirmation: "password@@!",
};

exports.registerInvalidUser = {
  email: "test1@test.com",
  password: "password@@!",
  passwordConfirmation: "password@@!",
};

exports.registerInvalidPasswordUser = {
  email: "test@test.com",
  username: "johndoe",
  firstName: "john",
  lastName: "doe",
  password: "password@@1",
  passwordConfirmation: "password@@!",
};

/*
 * LOGIn TEST PAYLOADS
 */

exports.loginValidEmailUser = {
  email: "test@test.com",
  password: "password@@!",
};

exports.loginValidUsernameUser = {
  username: "johndoe",
  password: "password@@!",
};

exports.loginInvalidCredentialsUser = {
  email: "wrong@test.com",
  password: "password@@!",
};

exports.loginInvalidPasswordUser = {
  email: "test@test.com",
  password: "password@@1",
};
