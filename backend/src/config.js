import dotenv from "dotenv";


dotenv.config();


export const config={
    db:{
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
}