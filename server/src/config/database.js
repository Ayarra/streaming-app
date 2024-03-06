const mongoose = require("mongoose");

async function dbConnect() {
  const dbURI = process.env.MONGO_URI;

  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(dbURI);
    console.log("Database connected");
  } catch (error) {
    console.log("Could not connect to the database", error);
  }
}

module.exports = dbConnect;
