const Products = require('../models/products');

exports.getProducts =('/add', (req,res,next) =>{
  console.log("Fetching products...");
  res.render("<h1>Products</h1><ul><li>Product 1</li><li>Product 2</li></ul>");
});