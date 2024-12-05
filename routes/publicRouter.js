const userRouter = require("../routes/userRoutes");
const productRouter = require("../routes/productRoutes");
const express = require("express");
const router = express.Router();

router.use("/user", userRouter);
router.use("/product", productRouter);

module.exports = router;
