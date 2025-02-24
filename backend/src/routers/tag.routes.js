import { Router } from "express";

import {
  createTagController,
  getAllTagsController,
  tagDetailController,
} from "../controllers/tag.controllers.js";
import { isLoggedIn, isUserVerified } from "../middlewares/auth.middlewares.js";

const router = Router();

// Routes
router.route("/").post(isLoggedIn, isUserVerified, createTagController);
router.route("/all").get(getAllTagsController);
router.route("/:id").get(tagDetailController);

export default router;
