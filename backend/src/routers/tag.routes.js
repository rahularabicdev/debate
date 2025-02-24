import { Router } from "express";

import { getAllTagsController } from "../controllers/tag.controllers.js";
import { isLoggedIn } from "../middlewares/auth.middlewares.js";

const router = Router();

// Routes
router.route("/all").get(getAllTagsController);

export default router;
