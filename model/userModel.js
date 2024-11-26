const { Schema, model } = require("mongoose");

// /creating Model schema
const userSchema = new Schema({
  fullname: { type: String },
  email: { type: String },
  mobile: { type: String },
  password: { type: String },
});

// exporting mongoose model
module.exports = model("student", userSchema);
