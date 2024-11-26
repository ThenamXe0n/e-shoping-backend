const User = require("../model/userModel");
// ================login =================
const userLogin = async (req, res) => {
  const { email, password } = req.body;//getting data form body 
  try {
    const finduser = await User.findOne({ email: email });// finding user in data base and getting details
    const check = finduser.password === password;//checking req.body.passwpord with received detail password
    if (check) {
      res.json("user logged in");
    } else {
      res.json("invalid email or password");
    }
  } catch {
    res.json("failed");
  }
};

const register = async (req, res) => {
  const { fullname, email, password, mobile } = req.body;

  if (!fullname || !email || !password || !mobile) {
    return res.json({
      status: false,
      message: "please fill all fields",
      data: null,
      statusCode: 401,
    });
  }

  try {
    const createUser = await User.create({ fullname, email, password, mobile });
    res.json({
      status: true,
      message: "user registered successfully",
      createUser,
      statusCode: 201,
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      status: false,
      message: "user registered failed",
      createUser,
      statusCode: 500,
    });
  }
};

module.exports = { userLogin, register };
