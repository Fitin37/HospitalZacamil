import express, { Router } from "express";
import patientsCon from "../controllers/patientsControllers.js";

const router= express.Router();

router
.route("/")
.get(patientsCon.getPatients)
.post(patientsCon.postPat);

router
.route("/:id")
.delete(patientsCon.deletePat)
.put(patientsCon.putPat);

export default router;