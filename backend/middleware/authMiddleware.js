import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler.js";
import User from "../models/userModel.js";

//Protect routes
export const protect = asyncHandler(async (req, res, next) => {
  let token;
  //read jwt from cookie
  token = req.cookies.jwt;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select("-password");
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("not authorized!, token failed");
    }
  } else {
    res.status(401);
    throw new Error("not authorized! no token");
  }
});

export const admin = (req, res, next) => {
  if (req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error(
      "Not authorized, only admin is allowed to perform this action"
    );
  }
};
