const jwt = require("jsonwebtoken");
const { UserModel } = require("../modules/userModel");

const protect = async (req, res, next) => {
  let token;

  const headers = req.headers;
  if (headers.authorization && headers.authorization.startsWith("Bearer")) {
    try {
      token = headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, "12345");
      const userId = decoded._id;
      const isUser = await UserModel.findOne({ _id: userId });

      if (isUser) {
        next();
      } else {
        res.status(401).send({ message: "No user with this token" });
      }
    } catch (error) {
      res.status(401).send({ message: "Invalid Token" });
    }
  }

  if (!token) {
    res.status(401).send({ message: "No Token." });
  }
};

module.exports = protect;
