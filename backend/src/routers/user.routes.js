import { Router } from "express";
import {
  fetchUserProfileController,
  forgotPasswordController,
  forgotPasswordRequestController,
  loginUserController,
  logoutUserController,
  refreshAccessTokenController,
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
router.route("/refresh-access-token").post(refreshAccessTokenController);

router.route("/forgot-password").post(forgotPasswordController);
router.route("/forgot-password-request").patch(forgotPasswordRequestController);

export default router;
