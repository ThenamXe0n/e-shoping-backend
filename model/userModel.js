const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  fullname: { type: String, require: true, lowercase: true },
  gender: { type: String, enum: ["male", "female", "other"] },
  email: { type: String, require: true, unique: true },
  mobile: { type: String, require: true },
  password: { type: String, require: true },
  address: [
    {
      street: { type: String },
      city: { type: String },
      pincode: { type: String },
      houseno: { type: String },
    },
  ],
  paymentDetails: {
    type: Schema.Types.Mixed,
    default: { method: "card", details: "7987897987987" },
  },
  avatar: {
    type: String,
    default: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  },
  isdeactive: { type: Boolean, default: false },
  isAccess: { type: Boolean },
  role: { type: String, default: "user", enum: ["user", "admin"] },
});

module.exports = model("User", userSchema);
