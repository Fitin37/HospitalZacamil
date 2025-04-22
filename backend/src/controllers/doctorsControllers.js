const docCon = {};

import docMod from "../models/doctors.js"

docCon.getDoc = async (req,res) =>{
    const Doc=await docMod.find();
    res.json(Doc)
};

docCon.postDoc = async (req,res) =>{
    const {Name,specialty,email,password}=req.body;
    const newDoc= new docMod({Name,specialty,email,password});
    await newDoc.save();
    res.json({message:"Doctor guardado"});
};

docCon.deleteDoc = async (req,res) =>{
    const deleteDoc = await docMod.findByIdAndDelete(req.params.id);
    if(!deleteDoc){
        return res.status(404).json({message : "Doctor no encontrado"});
    }
    res.json({message: "Doctor eliminado"});
};


docCon.putDoc = async (req,res) =>{
    const {Name,specialty,email,password} =req.body;

    await docMod.findByIdAndUpdate(
        req.params.id,
        {
            Name,
            specialty,
            email,
            password
        },
        {new : true}
    );
    res.json({message: "Doctor actualizado"});
};

export default docCon;