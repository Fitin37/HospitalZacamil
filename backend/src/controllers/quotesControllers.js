const quotesCon = {};
import quotesMod from "../models/quotes.js"

quotesCon.getQuotes = async (req ,res ) =>{
    const Quotes = await quotesMod.find();
    res.json(Quotes);
};


quotesCon.postQuotes = async (req,res) =>{
    const {date,hour,reason,doctorId,patientsId} = req.body;
    const newQuotes = new quotesMod({date,hour,reason,doctorId,patientsId});
    await newQuotes.save();
    res.json({message: "Cita agregada"});
};

quotesCon.deleteQuotes = async (req,res) =>{
    const deleteQuotes = await quotesMod.findByIdAndDelete(req.params.id);
    if(!deleteQuotes){
        return res.status(404).json({message: "Cita no encontrada"});
    };
    res.json({message : "Cita eliminada"});
};

quotesCon.putQuotes = async (req,res) =>{
    const {date,hour,reason,doctorId,patientsId}=req.body;

    await quotesMod.findByIdAndUpdate(
        req.params.id,{
            date,
            hour,
            reason,
            doctorId,
            patientsId
        },
        {new:true}
    );
    res.json({message: "Cita actualizada"});
};

export default quotesCon;