const {userLogin,register,getUsers} = require("../controller/userController")
const express = require("express")
const router = express.Router()

router.post("/login",userLogin)
router.post("/register",register)
router.get("/getuser",getUsers)

module.exports = router