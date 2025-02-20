import { Router } from "express";
import {
  fetchUserProfileController,
  loginUserController,
  logoutUserController,
  registerUserController,
} from "../controllers/user.controllers.js";
import uploadMiddleware from "../middlewares/multer.middlewares.js";
import { isLoggedIn } from "../middlewares/auth.middlewares.js";

const router = Router();

// Upload folders

// Routes
router.route("/register").post(registerUserController);
router.route("/login").post(loginUserController);
router.route("/logout").post(isLoggedIn, logoutUserController);

router.route("/fetch-profile").post(isLoggedIn, fetchUserProfileController);

export default router;
