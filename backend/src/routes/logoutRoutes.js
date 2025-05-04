import express from "express";
import Logout from "../controllers/Logout.js";

const router=express.Router();

router .route("/") .post(Logout.logout);

export default router;