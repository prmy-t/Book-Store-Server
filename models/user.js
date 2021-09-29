const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  password: String,
  cart: {},
});

module.exports = mongoose.model("User", userSchema);
