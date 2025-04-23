import dotenv from "dotenv";


dotenv.config();


export const config={
    db:{
<<<<<<< HEAD
        URI: process.env.DB_URI,
    },
    server:{
        port:process.env.PORT,
    },
    jwt: {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRES_IN || "30d",
      },
      email: {
        email: "noreply.byteshop@gmail.com",
        password: process.env.APP_PASSWORD_EMAIL,
      }
=======
        URI: process.env.DB_URI || "mongodb+srv://fito:WYBS0lQxFDP31IYm@sitiowebcholos.w6tdj.mongodb.net/HospitalBloom?retryWrites=true&w=majority&appName=SitioWebCholos"
    },
    server:{
        port:process.env.PORT || 4000,
    }
>>>>>>> 53ae4994868c4e9a9796446fbb7816b6203b8a3e
}