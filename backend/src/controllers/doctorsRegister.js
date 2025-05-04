import doctorsModel from "../models/doctors.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { config } from "../config.js";

const registerDoctors = {};

registerDoctors.register = async (req, res) => {
    const {
        Name,
        specialty,
        email,
        password
    } = req.body;

    if(
        !Name ||
        !specialty||
        !email||
        !password
    ){
        return res.status(400).json({ message: "Campos requeridos obligatoriamente" });
    }

    try {
        const docExist = await doctorsModel.findOne({ email });
        if (docExist) {
            return res.status(409).json({ message: "El doctor ya es existente" });
        }

        const passwordHash = await bcrypt.hash(password, 10);

        const newDoc = new doctorsModel({
            Name,
            specialty,
            email,
            password: passwordHash
        });

        await newDoc.save();

        jwt.sign(
            { id: newDoc._id },
            config.jwt.secret,
            { expiresIn: config.jwt.expiresIn },
            (err, token) => {
                if (err) console.log(err);
                res.cookie("authToken", token);
                res.status(201).json({ message: "Doctor registrado exitosamente" });
            }
        );
    } catch (error) {
        res.status(500).json({ message: "Error al registrar el doctor", error: error.message });
    }
}

export default registerDoctors;
