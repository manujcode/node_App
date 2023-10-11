const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  language: String,
  id: String,
  bio: String,
  version: {type:Number,require:true,min:[1,'wrong version']},
});
exports.product = mongoose.model("product", productSchema);
