const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
   homeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'Products',
    require: true,
    unique: true
  }
})

module.exports = mongoose.model("Order",orderSchema);