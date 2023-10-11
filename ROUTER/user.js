const express = require('express')
const user = require('../controler/users.js')
const router = express.Router()




 
router
  .post("/", user.postProduct)
  .get("/:id", user.getProductsId)
  .get("/", user.getProducts)
  .post("/:id", user.productUpdate)
  .patch("/:id", user.productPatch)
  .delete("/:id", user.productDelete)
exports.router =router;