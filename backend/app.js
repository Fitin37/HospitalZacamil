import express from "express";
import docRoutes from "./src/routes/doctorsRoutes.js"
import patRoutes from "./src/routes/patientsRoutes.js"
import quotesRoutes from "./src/routes/quotesRoutes.js"
<<<<<<< HEAD
import registerDocRoutes from "./src/routes/registerDocRoutes.js"
import regisPatientsRoutes from "./src/routes/registerPatiensRoutes.js"
import LoginRoutes from "./src/routes/loginRoutes.js";
=======
>>>>>>> 53ae4994868c4e9a9796446fbb7816b6203b8a3e

const app=express();

app.use(express.json());

app.use("/api/doctors",docRoutes);
app.use("/api/patients",patRoutes);
app.use("/api/quotes",quotesRoutes);
<<<<<<< HEAD
app.use("/api/registerDoc",registerDocRoutes);
app.use("/api/registerPat",regisPatientsRoutes);
app.use("/api/loginRoutes",LoginRoutes);
=======
>>>>>>> 53ae4994868c4e9a9796446fbb7816b6203b8a3e

export default app;