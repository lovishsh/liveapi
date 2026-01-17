import express from "express";
const router=express.Router();
import userAuth from "./auth/user.auth.js";
router.use("/auth/user",userAuth);
export default router;