const express = require("express");// calling express


const server = express() //created server using express framework
server.use(express.json())// middleware to parse body in json (making req.body readable to server)


//creating api end points 
server.get("/",(req,res)=>{
res.send('server is running....')
})

//post apis
server.post("/add",(req,res)=>{
    const{name,year,color} = req.body
    let response = `car name is ${name} having color ${color} and year ${year}`
    res.send(response)

})


server.listen(8080,()=>{console.log("server is running")})//listing the server
