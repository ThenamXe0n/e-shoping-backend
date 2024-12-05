const ApiResponse = require("../config/apiResponse");
const Product = require("../model/productModel");

const addNewProduct = async (req, res) => {
  const { title, price, category } = req.body;
  try {
    const newProduct = await Product.create(req.body);
    res
      .status(201)
      .json(new ApiResponse(true, "item added successfully", newProduct, 201));
  } catch (error) {
    res.status(500).json(new ApiResponse(false, error.message, null, 500));
  }
};

const getProducts = async (req, res) => {
  const query = req.query;
  console.log(query);

  try {
    const products = await Product.find(query);
    if (products.length > 0) {
      const total = products.length;
      return res.status(200).json({
        status: true,
        message: "Products fetched successfully",
        data: products,
      });
    }
    res
      .status(200)
      .json({ status: true, message: "no product to display", data: products });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message, data: null });
  }
};

const getProductsById = async (req, res) => {
  console.log("param", req);
  try {
    const product = await Product.findById("674eec5bf407e3c41e9fed39");
    console.log("by id", product);
    res.json(product);
  } catch (err) {
    res.json(err.message);
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndDelete(id);
    res.status(200).json(new ApiResponse(true, "item deleted", product, 200));
  } catch (error) {
    res.status(500).json(new ApiResponse(false, error.message, null, 500));
  }
};

module.exports = { addNewProduct, getProducts,deleteProduct, getProductsById };
