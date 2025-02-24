import Tag from "../models/tag.model.js";
import ApiError from "../utils/apiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/apiResponse.js";
import { notEmptyValidation } from "../utils/validators.js";

// Get All Tags
export const getAllTagsController = asyncHandler(async (req, res) => {
  /**
   * TODO: Get All Tags
   * TODO: Sending Response
   * **/

  // * Get All Tags
  const tags = await Tag.find({});

  // * Sending Response
  res
    .status(200)
    .json(new ApiResponse(200, tags, "Fetched all tags successfully!"));
});

// Create Tag
export const createTagController = asyncHandler(async (req, res) => {
  /**
   * TODO: Get data from frontend
   * TODO: validate data
   * TODO: Check if tag exists
   * TODO: Create a new tag
   * TODO: Sending Response
   * **/

  // * Get data from frontend
  const user = req.user;
  const { name, description } = req.body;

  // * Validate Data
  notEmptyValidation([name, description]);

  // * Check if Tag exists
  const existingTag = await Tag.findOne({ name });
  if (existingTag) {
    throw new ApiError(400, "Tag already exists!");
  }

  // * Create a new Tag
  const tag = await Tag.create({
    name,
    description,
    createdBy: user._id,
  });

  // * Sending Response
  res.status(201).json(new ApiResponse(201, tag, "Tag created successfully!"));
});
