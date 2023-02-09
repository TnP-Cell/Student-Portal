const mongoose = require("mongoose");

const transaction = new mongoose.Schema({
  date: String,
  time: String,
  amount: String,
  roll: String,
  semester: String,
  type: String,
  refno: String,
  status: Boolean,
});

module.exports = mongoose.model("transactionData", transaction);
