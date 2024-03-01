require("dotenv").config();
const createServer = require("./src/utils/server");
const dbConnect = require("./src/utils/database");

const app = createServer();

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
  dbConnect();
});

module.exports = app;
