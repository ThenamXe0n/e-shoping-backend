const User = require("../model/userModel");
const jwt =require("jsonwebtoken")

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
    const userDetail = await User.findById(user._id).select("-password")
    res
      .status(201)
      .json({ status: true, message: "user registered", data: userDetail });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message, data: null });
  }
};

const loginUser = async(req,res)=>{
  const {email,password} = req.body
  try{
    const user =await User.findOne({email:email,password:password}).select("-password")
    const token = jwt.sign({id:user._id,role:user.role},"ABCz123",{expiresIn:'1h'})
    res.status(200).json({status:true,message:"logged in successfully",user,token})
  }catch(error){
    res.status(500).json({status:false,message:error.message,data:null})
  }
}

module.exports = { registerUser,loginUser };
