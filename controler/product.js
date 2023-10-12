const fs = require("fs");
// let index = fs.readFileSync("index.html", "utf-8");
const mongoose = require("mongoose");

const model = require("../model/product.js");
const Product = model.product;

// let apis = fs.readFileSync("./public/data.json", "utf-8");
// let data = JSON.parse(apis);
// data = data.product;
//create
exports.postProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    console.log(product);
    res.send(product);
  } catch (error) {
    res.status(500).send(error);
  }

  // console.log(req.body)
  // data.push(req.body)
  // console.log(data)
};

exports.getProductsId = async(req, res) => {
  const id = req.params.id;
  // console.log(req.params.id)
  const product = await Product.findById(id)
  console.log(product);
  res.json(product);
};

exports.getProducts = async(req, res) => {
  const product = await Product.find()
  res.json(product);
};

exports.productUpdate = async(req, res) => {
  // console.log(req.body)
  // console.log(req.params.id)
  const id = req.params.id;
  try{
 let product =  await Product.findOneAndUpdate({_id:id},req.body,{new:true})
  // let product = data[productindex];

  console.log("mjnjniujninujnnjunjnjn",product,"nunnjnjnjnjnnjnjnj");
  // data.splice(productindex, 1, { ...product, ...req.body });
  res.json(product);
  }
  catch(err){
    console.log()
    res.json(err);

  }
};
exports.productPatch = async(req, res) => {
  // res.json({ type: "PATCH" });
  const id = req.params.id;
  try{
 let product =  await Product.findOneAndReplace({_id:id},req.body,{new:false})
  // let product = data[productindex];

  console.log(product);
  // data.splice(productindex, 1, { ...product, ...req.body });
  res.json(product);
  }
  catch(err){
    console.log()
    res.json(err);

  }
};
exports.productDelete = (req, res) => {
  // res.json({ type: "DELETE" });
  const id = req.params.id;
  let productindex = data.findIndex((p) => p.id === id);
  let product = data[productindex];
  //  console.log(req.body)
  data.splice(productindex, 1);
  res.json(data);
};
