const User = require("../model/userModel");

const registerUser = async (req, res) => {
  const { fullname, email, mobile, password } = req.body;
  if (
    fullname === null ||
    fullname === undefined ||
    email === null ||
    email === undefined ||
    password === null ||
    password === undefined ||
    mobile === null ||
    mobile === undefined
  ) {
    return res.status(400).json({ message: "Please fill all the fields" });
  }
  try {
    const user = await User.create(req.body);
    res
      .status(201)
      .json({ status: true, message: "user registered", data: user });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message, data: null });
  }
};

module.exports = { registerUser };
