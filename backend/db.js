const mongoose = require("mongoose");

const url = process.env.DB_URL;
mongoose.set('strictQuery', true);

const connect = () => {
  try {
    mongoose.connect(
      url,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      (err) => {
        console.log("Database Connected");
      }
    );
  } catch (err) {
    console.log("Database Connection Failed\nError: " + err);
  }
}

module.exports = connect;
