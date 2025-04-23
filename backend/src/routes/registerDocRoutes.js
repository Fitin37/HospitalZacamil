import express from "express";
import registerDoctors from "../controllers/doctorsRegister.js";

const router=express.Router();

router
.route("/")
.post(registerDoctors.register)

export default router;