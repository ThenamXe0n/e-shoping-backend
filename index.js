require("dotenv").config();
const express = require("express"); // calling express
const mongoose = require("mongoose");
const cors = require("cors");
const publicRouters = require("./routes/publicRouter");

const server = express(); //created server using express framework
server.use(express.json()); // middleware to parse body in json (making req.body readable to server)
server.use(express.urlencoded());
server.use(cors());

//v1//is for public routes
//v2//is for admin routes
// api end points
server.use("/v1", publicRouters);

server.listen(8080, async (error) => {
  try {
    let db_url = process.env.DB_URL;
    await mongoose.connect(db_url);
    console.log("connected to database");
  } catch (error) {
    console.log(error, "failed to connect database");
  }
}); //listing the server
