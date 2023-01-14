const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/user.model");
require("dotenv").config();
const Authentication = (req, res, next) => {
  if (!req.headers.authorization) return res.send({ response: "Please Login" });
  const token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, process.env.SECRET_KEY, async (err, decoded) => {
    if (err) return res.send({ response: "Please Login!!" });
    else {
      const { userId, userEmail } = decoded;
      const user = await UserModel.findOne({ _id: userId })
      req.body.name=user?.name
      req.body.userId = userId;
      req.body.email = userEmail;
      next();
    }
  });
};

module.exports = { Authentication };