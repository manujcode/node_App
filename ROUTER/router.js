const express = require('express')
const product = require('../controler/product.js')
const router = express.Router()




 
router
  .post("/", product.postProduct)
  .get("/:id", product.getProductsId)
  .get("/", product.getProducts)
  .post("/:id", product.productUpdate)
  .patch("/:id", product.productPatch)
  .delete("/:id", product.productDelete)
exports.router =router;