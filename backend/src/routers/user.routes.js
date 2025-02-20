import { Router } from "express";
import { registerUserController } from "../controllers/user.controllers.js";
import uploadMiddleware from "../middlewares/multer.middlewares.js";
import { isLoggedIn } from "../middlewares/auth.middlewares.js";

const router = Router();

// Upload folders

// Routes
router.route("/register").post(registerUserController);

export default router;
