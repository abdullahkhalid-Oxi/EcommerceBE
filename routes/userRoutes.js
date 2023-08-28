const express = require("express");
const Userrouter = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../modules/userModel");

//REGISTER USER
const registerUser = async (req, res) => {
  const saltRounds = 10;
  const userName = req.body.userName;
  const password = req.body.password;

  const existenceUser = await UserModel.findOne({ userName });

  if (existenceUser) {
    res.send({ message: "User Already available" });
    console.log("User Already available");
    return;
  }

  const tempPassword = await bcrypt.hash(password, saltRounds);

  console.log("Temp Password = ", tempPassword);
  const userData = { userName, password: tempPassword };
  const savedUser = new UserModel(userData);

  const saved = await savedUser.save();
  console.log("Saved " + saved);

  res.send({ message: "User register Successfully ", UserModel: saved });
};

//LOGIN USER
const loginUser = async (req, res) => {
  const userName = req.body.userName;
  const password = req.body.password;

  console.log(
    "Consoled UserName = ",
    userName,
    ",Consoled Password = ",
    password
  );

  const isUser = await UserModel.findOne({ userName });

  if (isUser) {
    const match = await bcrypt.compare(password, isUser.password);
    if (match) {
      const token = jwt.sign({ _id: isUser._id }, "12345", {
        expiresIn: "10d",
      });
      res.send({
        UserModel: isUser,
        message: "LOGIN SUCCESSFULLY",
        token: token,
      });
      console.log("User LOGED IN", isUser);
      console.log("token", token);
    } else {
      res.send({ message: "Wrong Password is being Entered" , match});
      console.log("Wrong Password is being Entered");
    }
  } else {
    console.log("User Not Available");
    res.send({ message: "User Not Availale!" });
  }
};

module.exports = {
  registerUser, // Export the registerUser function
  loginUser, // Export the loginUser function
  Userrouter, // Export the router
};
