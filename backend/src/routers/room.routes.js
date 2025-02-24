import { Router } from "express";
import {} from "../controllers/room.controllers.js";
import { isLoggedIn } from "../middlewares/auth.middlewares.js";

const router = Router();

// Routes
router.route("/").post();

export default router;
