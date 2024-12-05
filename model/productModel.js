const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  title: { type: String, require: true, lowercase: true },
  price: { type: Number, require: true },
  MRP: { type: Number, require: true },
  stock: { type: Number, require: true, default: 1 },
  brand: { type: String, require: true, default: "other" },
  category: { type: String, require: true },
  subcategory: { type: String, require: true },
  keyword: { type: Schema.Types.Array },
  thumbnail: { type: String, require: true },
  images: [{ type: String }],
  discount: { type: Number, default: 0 },
  description: { type: String, require: true },
  rating: { type: Number, default: 5, enum: [1, 2, 3, 4, 5] },
  sold: { type: Number, default: 0 },
});

module.exports = model("product", productSchema);
