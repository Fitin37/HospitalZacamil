import express from "express";
import loginController from "../controllers/Login.js";

const router=express.Router();

router
.route("/")
.post(loginController.Login);


export default router;