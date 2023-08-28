const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    userName: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("User", userSchema);

module.exports = { UserModel };
