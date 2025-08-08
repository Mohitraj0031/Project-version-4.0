const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  productName:{
    type:String,
    require:true
  },
  price:{
    type:Number,
    require:true
  },
  photos:String,
  description:String
})

module.exports = mongoose.model("Product",productSchema);