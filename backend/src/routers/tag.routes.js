import { Router } from "express";

import {
  createTagController,
  getAllTagsController,
} from "../controllers/tag.controllers.js";
import { isLoggedIn, isUserVerified } from "../middlewares/auth.middlewares.js";

const router = Router();

// Routes
router.route("/").post(isLoggedIn, isUserVerified, createTagController);
router.route("/all").get(getAllTagsController);

export default router;
