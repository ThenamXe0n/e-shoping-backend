const {registerUser, loginUser} = require("../controller/userController")
const express = require("express")
const router = express.Router()

router.post("/register",registerUser)
router.post("/login",loginUser)

module.exports = router