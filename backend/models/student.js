const mongoose = require("mongoose");

const stud = new mongoose.Schema({
  name: String,
  roll: String,
  branch: String,
  batch: String,
  address: String,
  dob: String,
  bloodgroup: String,
  fathersname: String,
  mothersname: String,
  email: String,
  contact: String,
  pcontact: String,
});

module.exports = mongoose.model("studData", stud);
