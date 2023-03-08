const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
//   _id: { type: Number, required: true, default: Date.now() },
  username: { type: String, required: true },
  password: { type: String, required: true },
  contact: { type: String, required: true },
});

module.exports = mongoose.model("Users", userSchema);
