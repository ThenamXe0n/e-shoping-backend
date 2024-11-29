const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name: { type: String, require: true, lowercase: true },
  price: { type: Number, require: true },
  stock: { type: Number, require: true, default: 1 },
  brand: { type: String, require: true, default: "other" },
  category: { tyoe: String, require: true },
});

module.exports = model("product", productSchema);
