const patientsCon={}; 
import patientsMod from "../models/patients.js"

patientsCon.getPatients = async (req , res) => {
    const Pat = await patientsMod.find();
    res.json(Pat)
};

patientsCon.postPat = async (req,res) =>{
    const {name,age,email,password,telephone,isVerified} = req.body;
    const newPat= new patientsMod({name,age,email,password,telephone,isVerified});
    await newPat.save();
    res.json({message: "Paciente guardado"});
};


patientsCon.deletePat = async (req,res) => {
    const deletePat = await patientsMod.findByIdAndDelete(req.params.id);
    if(!deletePat){
        return res.status(404).json({message: "Paciente no encontrado"});
    }
    res.json({message: "Paciente eliminado"});
};


patientsCon.putPat = async (req,res) =>{
    const {name,age,email,password,telephone,isVerified} = req.body;
    
    await patientsMod.findByIdAndUpdate(
        req.params.id,
        {
            name,
            age,
            email,
            password,
            telephone,
            isVerified
        },
        {new:true}
    );
    res.json({message: "Paciente Actualizado"})
};

export default patientsCon;
