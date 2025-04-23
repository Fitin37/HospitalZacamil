import patientsModel from "../models/patients.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { config } from "../config.js";

const patientsRegis={};

patientsRegis.register = async (req , res) =>{
    const{
        name,
        age,
        email,
        password,
        telephone,
        isVerified
    }=req.body;

    if(
        !name ||
        !age||
        !email||
        !password||
        !telephone||
        !isVerified
    ){
        return res.status(404).json({message: "campos requeridos obligatoriamente"});
    }

    try{
            const patientsExisting = await patientsModel.findOne({email});
            if(patientsExisting){
                return res.status(409).json({ message: "El paciente ya es existente" });
            }

            const passwordHash = await bcrypt.hash(password,10);

            const newPatients = new patientsModel({
                name,
                age,
                email,
                password:passwordHash,
                telephone,
                isVerified
            });

            await newPatients.save();

            jwt.sign(
                {id: newPatients._id},
                config.jwt.secret,
                {expiresIn: config.jwt.expiresIn},
                (err,token) =>{
                    if(err) console.log(err);
                    res.cookie("authToken",token);
                    res.status(201).json({ message: "Paciente registrado exitosamente" });
                }
            );
    }catch (error) {
        res.status(500).json({ message: "Error al registrar el paciente", error: error.message });
    }
}

export default patientsRegis;