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

exports.loginValidUser = {
  email: "test@test.com",
  password: "password@@!",
};
