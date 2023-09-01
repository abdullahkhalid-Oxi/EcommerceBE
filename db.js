import dotenv from "dotenv"

const mongoose = require("mongoose");

  const connectDB = mongoose
  .connect(process.env.mongoURI)
  .then(() => console.log("Connected!"));
 