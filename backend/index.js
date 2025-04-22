import app from "./app.js";
import "./database.js";


import dotenv from "dotenv";

dotenv.config();

import { config } from "./src/config.js";

//make una funcion que ejecute el server

async function main() {
      app.listen(config.server.port);
      console.log("Server on port " + config.server.port);
    }
//se pone en marcha todo
main();