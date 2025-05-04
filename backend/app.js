import express from "express";
import docRoutes from "./src/routes/doctorsRoutes.js"
import patRoutes from "./src/routes/patientsRoutes.js"
import quotesRoutes from "./src/routes/quotesRoutes.js"
import registerDocRoutes from "./src/routes/registerDocRoutes.js"
import regisPatientsRoutes from "./src/routes/registerPatiensRoutes.js"
import LoginRoutes from "./src/routes/loginRoutes.js";
import LogoutRoutes from "./src/routes/logoutRoutes.js";

const app=express();

app.use(express.json());

app.use("/api/doctors",docRoutes);
app.use("/api/patients",patRoutes);
app.use("/api/quotes",quotesRoutes);
app.use("/api/registerDoc",registerDocRoutes);
app.use("/api/registerPat",regisPatientsRoutes);
app.use("/api/loginRoutes",LoginRoutes);
app.use("/api/logoutRoutes",LogoutRoutes);


export default app;