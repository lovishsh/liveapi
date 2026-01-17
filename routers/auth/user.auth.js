import express from "express";
const router=express.Router();
import userAuthController from "../../controllers/auth/user.auth.js"
router.post("/register",userAuthController.register);
router.post("/login",userAuthController.login);
router.get("/profile",userAuthController.userProfile);
export default router;