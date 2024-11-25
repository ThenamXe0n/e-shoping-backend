const userLogin = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  const checking = user.password === req.body.password;

  if (checking) {
    res
      .status(201)
      .json({
        status: true,
        message: "user logged in successfully",
        statusCode: 201,
        data: user,
      });
  } else {
    res
      .status(401)
      .json({
        status: false,
        message: "invalid email or password",
        statusCode: 401,
        data: null,
      });
  }
};

const addCar = (req, res) => {
  const { name, year, color } = req.body;
  let response = `car name is ${name} having color ${color} and year ${year}`;
  res.send(response);
};

module.exports = { userLogin ,addCar};
