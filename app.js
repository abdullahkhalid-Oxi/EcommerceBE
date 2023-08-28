console.log("Connected!");
// const PORT = 8000;
const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(cors());
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use(express.json());
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");

const cors = require("cors");
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

app.listen(8000, () => console.log("Server is running."));