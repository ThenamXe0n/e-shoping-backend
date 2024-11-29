const { addNewProduct } = require("../controller/productContoller");
const express = require("express");
const router = express.Router()

router.post("/add", addNewProduct);

module.exports = router;
