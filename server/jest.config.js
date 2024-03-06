const dotenv = require("dotenv");
dotenv.config({ path: "tests.env" });

/** @type {import('jest').Config} */
const config = {
  verbose: true,
  forceExit: true,
};

module.exports = config;
