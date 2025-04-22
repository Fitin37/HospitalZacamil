import { Schema,model } from "mongoose";

const quotesSchema=new Schema({
    date:{
        type:Date,
        require:true
    },
    hour:{
        type:String
    },
    reason:{
        type:String,
        require:true
    },
    doctorId:{
        type:Schema.Types.ObjectId,
        ref: "doctors",
        require:true
    },
    patientsId:{
        type:Schema.Types.ObjectId,
        ref:"patients",
        require:true
    }
},{
    timestamps:true,
    strict:false
}
);

export default model("Quotes",quotesSchema);