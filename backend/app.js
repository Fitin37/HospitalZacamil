import express from "express";
import docRoutes from "./src/routes/doctorsRoutes.js"
import patRoutes from "./src/routes/patientsRoutes.js"
import quotesRoutes from "./src/routes/quotesRoutes.js"

const app=express();

app.use(express.json());

app.use("/api/doctors",docRoutes);
app.use("/api/patients",patRoutes);
app.use("/api/quotes",quotesRoutes);

export default app;