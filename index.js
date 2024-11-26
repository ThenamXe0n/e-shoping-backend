const express = require("express"); // calling express
const mongoose = require("mongoose");
const { register, userLogin } = require("./controller/userController");//importing controllers

const server = express(); //created server using express framework
server.use(express.json()); // middleware to parse body in json (making req.body readable to server)

// api end points
server.post("/register", register);
server.post("/login", userLogin);

server.listen(8080, async (error) => {
  try {
    await mongoose.connect("mongodb://localhost:27017/nameet");
    console.log("connected to database");
  } catch (error) {
    console.log(error, "failed to connect database");
  }
}); //listing the server
