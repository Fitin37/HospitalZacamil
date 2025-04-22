import dotenv from "dotenv";


dotenv.config();


export const config={
    db:{
        URI: process.env.DB_URI || "mongodb+srv://fito:WYBS0lQxFDP31IYm@sitiowebcholos.w6tdj.mongodb.net/HospitalBloom?retryWrites=true&w=majority&appName=SitioWebCholos"
    },
    server:{
        port:process.env.PORT || 4000,
    }
}