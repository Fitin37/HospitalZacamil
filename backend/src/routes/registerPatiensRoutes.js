import express from "express";
import patientsRegis from "../controllers/parientsRegister.js";

const router= express.Router();


router
.route("/")
.post(patientsRegis.register)

export default router;
