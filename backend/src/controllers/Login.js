import doctorsModel from "../models/doctors.js";
import patientsModel from "../models/patients.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { config } from "../config.js";

const loginController = {};

loginController.Login = async (req, res) => {
    const { Name, email, password } = req.body;

    try {
        let userFound = null;
        let userType = null;

        // Primero intenta encontrar al paciente
        if (email) {
            userFound = await patientsModel.findOne({ email });
            userType = "Paciente";
        }

        // Si no se encontró un paciente, intenta encontrar al doctor
        if (!userFound && Name) {
            userFound = await doctorsModel.findOne({ Name });
            userType = "Doctor";
        }

        // Si no se encontró ningún usuario
        if (!userFound) {
            console.log("No se encontró ningún usuario");
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        // Verifica la contraseña
        const isMatch = await bcrypt.compare(password, userFound.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Contraseña incorrecta" });
        }

        // Genera el token
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
                    console.error(err);
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