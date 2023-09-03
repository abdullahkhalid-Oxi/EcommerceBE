const mongoose = require("mongoose");

const productSchemea = mongoose.Schema(
  {
    productName: String,
    productPrice: Number,
    productDescription: String,
    productImage: String,
  },
  {
    timestamps: true,
  }
);

const productModel = mongoose.model("product", productSchemea);

module.exports = productModel;
