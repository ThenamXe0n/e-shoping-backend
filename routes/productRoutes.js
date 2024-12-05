const {
  addNewProduct,
  getProducts,
 getProductsById,
 deleteProduct
} = require("../controller/productContoller");
const express = require("express");
const router = express.Router();

router.get("/", getProducts);
router.get("/item/:title", getProductsById);
router.post("/add", addNewProduct);
router.delete("/delete/:id", deleteProduct);

module.exports = router;
