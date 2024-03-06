require("dotenv").config();
const createServer = require("./src/config/server");
const dbConnect = require("./src/config/database");

const app = createServer();

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
  dbConnect();
});

module.exports = app;
