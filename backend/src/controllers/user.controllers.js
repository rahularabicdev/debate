import jwt from "jsonwebtoken";
import mongoose from "mongoose";

import User from "../models/user.model.js";
import ApiError from "../utils/apiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/apiResponse.js";
import {
  compareFieldValidation,
  emailValidation,
  notEmptyValidation,
  passwordValidation,
  usernameValidation,
} from "../utils/validators.js";
import {
  generateVerificationToken,
  generate20CharToken,
  generateAccessRefreshToken,
  options,
} from "../utils/generateToken.js";

// Register User Controller
export const registerUserController = asyncHandler(async (req, res) => {
  /**
   * TODO: Get data from frontend
   * TODO: Validate Data
   * TODO: Check if user exist
   * TODO: Create new user
   * TODO: Sending Response
   * **/

  // * Get data from frontend
  const {
    username,
    email,
    firstName,
    lastName,
    dateOfBirth,
    password,
    password2,
  } = req.body;

  // * Validate Data
  notEmptyValidation([
    username,
    email,
    firstName,
    dateOfBirth,
    password,
    password2,
  ]);
  emailValidation(email);
  usernameValidation(username);
  passwordValidation(password);
  compareFieldValidation(password, password2, "Password does not match");

  // * Check if user exist
  const emailExist = await User.findOne({ email });
  if (emailExist) {
    throw new ApiError(400, "Email already in use");
  }
  const usernameExist = await User.findOne({ username });
  if (usernameExist) {
    throw new ApiError(400, "Username already in use");
  }

  // * Create new user
  const createdUser = await User.create({
    username,
    email,
    firstName,
    lastName,
    dateOfBirth,
    password,
  });

  // * Check if user is created
  const user = await User.findById(createdUser._id);
  if (!user) {
    throw new ApiError(500, "Error creating user, Please try again!");
  }

  // * Save Verification Code
  const token = generate20CharToken();
  generateVerificationToken(user._id, token);

  // * Generate Access & Refresh Token
  const { accessToken, refreshToken } = await generateAccessRefreshToken(
    user._id
  );

  // * Sending Response
  return res
    .status(201)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        201,
        {
          user,
          accessToken,
          refreshToken,
        },
        "User created successfully!"
      )
    );
});
