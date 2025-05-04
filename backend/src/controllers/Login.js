const loginController={};

import patientsModel from "../models/patients.js";
import doctorsModel from "../models/doctors.js";
import bcrypt from "bcryptjs"; //Encriptar
import jwt from "jsonwebtoken"; //generar Token
import { config } from "../config.js";

loginController.Login = async (req, res) => {
    const { email, password } = req.body;

    try {
        let userFound = null;
        let userType = null;

        // Intentar encontrar al paciente primero
        if (email) {
            userFound = await patientsModel.findOne({ email });
            userType = "Paciente";

            // Si es paciente pero no está verificado, rechazar login
            if (userFound && !userFound.isVerified) {
                return res.status(403).json({ message: "El correo no ha sido verificado" });
            }
        }

        // Si no es paciente, intenta con doctor
        if (!userFound && email) {
            userFound = await doctorsModel.findOne({ email });
            userType = "Doctor";
        }

        if (!userFound) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        const isMatch = await bcrypt.compare(password, userFound.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Contraseña incorrecta" });
        }

        jwt.sign(
            {
                id: userFound._id,
                userType,
            },
            config.jwt.secret,
            {
                expiresIn: config.jwt.expiresIn,
            },
            (err, token) => {
                if (err) {
                    return res.status(500).json({ message: "Error al generar el token" });
                }

                res.cookie("authToken", token, { httpOnly: true });
                res.status(200).json({ message: `${userType} login realizado`, token });
            }
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error", error: error.message });
    }
};

export default loginController;