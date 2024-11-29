const Product = require("../model/productModel");

const addNewProduct = async (req, res) => {
  const { name, price, category, brand, stock } = req.body;
  try {
    const newProduct = await Product.create(req.body);
    res
      .status(201)
      .json({
        status: true,
        message: "Product added successfully",
        data: newProduct,
      });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message, data: null });
  }
};

module.exports = {addNewProduct}
