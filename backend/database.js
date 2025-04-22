import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

import { config } from "./src/config.js";

//cnfigurar dirrecion de la base de datos

//conectar la base de datos

mongoose.connect(config.db.URI);

//---------- ver si funca -------

//crear la constante  que se iguale a la coneccion

const connection = mongoose.connection;

//ver si funca

connection.once("open",() =>{
    console.log("DB is connected");
});

//ver si no funca

connection.on("disconnected",() =>{
    console.log("DB id disconnected");
});

//ver si peto

connection.on("error",(error) =>{
    console.log("error found" + error);
});