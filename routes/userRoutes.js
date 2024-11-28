const {registerUser} = require("../controller/userController")
const express = require("express")
const router = express.Router()

router.post("/register",registerUser)

module.exports = router