const mongoose = require("mongoose");

const fees = new mongoose.Schema({
  roll: String,
  session: String,
  fees: [
    {
      course: String,
      semester: String,
      tuitionfee: String,
      otherfee: String,
      convocationfee: String,
    },
  ],
  fine: String,
});

module.exports = mongoose.model("feeStructure", fees);
