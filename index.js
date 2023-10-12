// const express =require('express')
// const fs = require("fs");
 require('dotenv').config()
 const mongoose = require('mongoose');
  const cors = require('cors')
  const path =require('path')
//  const product =require('../')
// const data = { age: 5 };
// let index = fs.readFileSync( 'index.html','utf-8');
const productRouter =require('./ROUTER/router.js')
 const userRouter =require('./ROUTER/user.js')


main().catch(err=> console.log(err));

async function main(){
  await mongoose.connect(process.env.MONGO_URL);
  console.log('database connected')
}
// console.log(mongoose)

const express = require("express");
const morgan = require("morgan");
const server = express();
// let productRouter = express.Router();
// server.use((req, res, next) => {
//   console.log(req.ip, req.get("User-Agent"));
//   next();
// const product = require("./controler/product.js");
// const user = require('./controler/users.js')
// });   
  

console.log('env',process.env.DB_PASSWORD)
server.use(cors());

server.use(express.json());
server.use(morgan("default"));
server.use(express.static(path.resolve(__dirname,process.env.MAIN_PROCESS)));
server.use('/products',productRouter.router)
server.use('/users',userRouter.router)
// console.log(process.env.MAIN_PROCESS)
server.use('*',(req,res)=>{
res.sendFile(path.resolve(__dirname,'build','index.html'))
})

// let auth = (req, res, next) => {

// //   if (req.body.passward == "123") {
// //     next();
// //   } else {



// //     res.sendStatus(401);
// //   }
//    next();

// };
// server.use(auth)

//CREATE    C R U D
// console.log(server)

// server.put("/", (req, res) => {
//   res.json({ type: "PUT" });
// });

// server.get("/home", (req, res) => {
//   //  res.json(data)
//   // res.status(200).sendFile('/Users/manujgupta/Desktop/node-app/index.html')
//   res.sendStatus(404);rguyruigrjghijr4hg
// });



server.listen(process.env.PORT, () => {
  console.log("server started");

});

