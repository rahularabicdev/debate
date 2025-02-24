import Tag from "../models/tag.model.js";
import ApiError from "../utils/apiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/apiResponse.js";

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
