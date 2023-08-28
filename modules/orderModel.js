const mongoose = require("mongoose");

const orderSchemea = mongoose.Schema({
  products: Array,
  name: String,
  email: String,
  address: String,
  phoneNumber: Number,
});

const orderModel = mongoose.model("product", orderSchemea);

module.exports = orderModel;
