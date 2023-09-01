console.log("Connected!");
// import path from "path";
const PORT = process.env.PORT || 8000;
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const cors = require("cors");
app.use(cors());
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use(express.json());

app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (_, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"), function (err) {
    res.status(500).send(err);
  });
});

const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");

require("dotenv").config();

mongoose
  .connect(process.env.mongoURI)
  .then(() => console.log("DATABASE Connected!"))
  .catch((error) => console.log("DATABASE ERROR", error));

app.get("/jail", (req, res) => {
  res.status(200).send("GET Request is running,yes yahoo");
});

// const router = require("./routes/users");
app.use("/users", userRoutes.Userrouter);
app.post("/register", userRoutes.registerUser);
app.post("/login", userRoutes.loginUser);
app.use("/products", productRoutes.Productrouter);

app.listen(PORT, () => console.log("Server is running on PORT " + PORT));
