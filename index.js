const express = require("express");// calling express
const {userLogin, addCar} = require("./controller/userController")



const server = express() //created server using express framework
server.use(express.json())// middleware to parse body in json (making req.body readable to server)


//creating api end points 
server.get("/",(req,res)=>{
res.send('server is running....')
})

//post apis
server.post("/add",addCar)

server.post("/login",userLogin)


server.listen(8080,(error)=>{console.log("server is running")})//listing the server
