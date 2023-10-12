
const fs = require("fs"); 
// let index = fs.readFileSync("index.html", "utf-8");
const path =require('path')
let apis = fs.readFileSync(path.resolve(__dirname,"../public/data.json", "utf-8"));
let data = JSON.parse(apis);   
let user =data.users
exports.postProduct =(req, res) => {
    console.log(req.body)
    user.push(req.body)
    console.log(user)
    res.json( user);
  }
  exports.getProductsId=(req, res) => {
    const id= req.params.id
    // console.log(id)
    // console.log("ufhiuhd",user.find(p=>p.id==id))
   res.json(user.find(p=>p.id==id));
  }
  
  exports.getProducts =(req, res) => {
    
    res.json(user);
   }
   
   exports.productUpdate = (req, res) => {
    // console.log(req.body)
    // console.log(req.params.id)
    const id = req.params.id;
    let productindex = user.findIndex(p=>p.id===id)
    // console.log(productindex)
    user.splice(productindex,1,{...req.body,id:id})
    res.json( user);
  }
  exports.productPatch=(req, res) => {
    // res.json({ type: "PATCH" });
    const id =req.params.id;
    let productindex =user.findIndex(p=>p.id===id)
    let product = user[productindex];
     console.log(req.body)
    user.splice(productindex,1,{...product,...req.body})
    res.json(user)
  }
exports.productDelete =(req, res) => {
    // res.json({ type: "DELETE" });
    const id =req.params.id;
    let productindex =user.findIndex(p=>p.id===id)
    let product = user[productindex];
    //  console.log(req.body)
    user.splice(productindex,1)
    res.json(user)
  
  }
  
