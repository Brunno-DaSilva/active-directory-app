//=============================
//      Dependencies
//=============================
const mongoose = require("mongoose");

//=============================
//      User Schema
//=============================
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  department: { type: String, required: true },
  jobTitle: { type: String, required: true },
  jobDescription: { type: String, required: true },
  createdOn: { type: Date, default: Date.now },
  isActive: Boolean,
});

//=============================
//      User Models
//=============================
const User = mongoose.model("User", userSchema);

//=============================
//      Export User Models
//=============================
module.exports = User;
