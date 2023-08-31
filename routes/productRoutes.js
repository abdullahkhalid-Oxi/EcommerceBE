const express = require("express");
const ProductModel = require("../modules/productModel");
const UserModel = require("../modules/userModel");
const protect = require("../middlewares/auth");
const fetch = require("node-fetch");d
const mongoose = require("mongoose");

const Productrouter = express.Router();

Productrouter.get("/all", async (req, res) => {
  const allproducts = await ProductModel.find({});
  if (allproducts.length) {
    res.send({ message: "Product Find", ProductModel: allproducts });
    console.log("Product Find", allproducts);
  } else {
    res.send({ message: "No Products Available" });
    console.log("No Products Available");
  }
});

Productrouter.post("/add", protect, async (req, res) => {
  const productName = req.body.ProductName;
  const productPrice = req.body.productPrice;
  const productDescription = req.body.productDescription;
  const productImage = req.body.productImage;

  const productData = {
    productName,
    productPrice,
    productDescription,
    productImage,
  };
  const productInstance = new ProductModel(productData);
  const SavedProduct = await productInstance.save();

  res.send({ message: "Product Added.", ProductModel: SavedProduct });
});

Productrouter.put("/edit/:id", protect, async (req, res) => {
  const productId = req.params.id;
  const product = await ProductModel.findOne({ _id: productId });

  if (product) {
    product.productName = req.body.ProductName;
    product.productPrice = req.body.productPrice;
    product.productDescription = req.body.productDescription;
    product.productImage = req.body.productImage;
    const SavedProduct = await product.save;
    res.send({ message: "Product Edited", ProductModel: SavedProduct });
  } else {
    res.send({ message: "Product Not Found." });
  }
});

Productrouter.delete("/:id", protect, async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await ProductModel.deleteOne({ _id: productId });
    res.send({ message: "Product Deleted", ProductModel: product });
  } catch (error) {
    res.send({ message: error });
  }
});

Productrouter.get("/:id", async (req, res) => {
  const productId = req.params.id;
  const product = await ProductModel.findOne({ _id: productId });
  res.send({ message: "Product Found", ProductModel: product });
});

module.exports = { Productrouter };

const jwt = require("jsonwebtoken");
