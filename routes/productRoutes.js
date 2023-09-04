const express = require("express");
const ProductModel = require("../modules/productModel");
const UserModel = require("../modules/userModel");
const protect = require("../middlewares/auth");
import("node-fetch").then((fetchModule) => {
  const fetch = fetchModule.default;
  // Now you can use the fetch function
});

const mongoose = require("mongoose");

const Productrouter = express.Router();

Productrouter.get("/all", async (req, res) => {
  const allProducts = await ProductModel.find({});
  if (allProducts.length) {
    res.status(201).send({ message: "Product Find", ProductModel: allProducts });
    console.log("Product Find", allProducts);
  } else {
    res.status(201).send({ message: "No Products Available" });
    console.log("No Products Available");
  }
});

// Productrouter.post("/add", protect, async (req, res) => {
Productrouter.post("/add", async (req, res) => {
  const productName = req.body.productName;
  const productPrice = req.body.productPrice;
  const productDescription = req.body.productDescription;
  // const productImage = req.body.productImage;

  const productData = {
    productName,
    productPrice,
    productDescription,
    // productImage,
  };
  const productInstance = new ProductModel(productData);
  const SavedProduct = await productInstance.save();

  res.send({ message: "Product Added.", ProductModel: SavedProduct });
});

Productrouter.put("/edit/:id", protect, async (req, res) => {
  const productId = req.params.id;
  const product = await ProductModel.findOne({ _id: productId });

  if (product) {
    product.productName = req.body.productName;
    product.productPrice = req.body.productPrice;
    product.productDescription = req.body.productDescription;
    // product.productImage = req.body.productImage;
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

module.exports = Productrouter;

const jwt = require("jsonwebtoken");
