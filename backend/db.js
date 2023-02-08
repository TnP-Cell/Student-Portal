const mongoose = require("mongoose");

const url = process.env.DB_URL;

const connect = async () => {
  try {
    await mongoose.connect(
      url,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      () => {
        console.log("Database Connected");
      }
    );
  } catch (err) {
    console.log("Database Connection Failed\nError: " + err);
  }
}

module.exports = connect;
