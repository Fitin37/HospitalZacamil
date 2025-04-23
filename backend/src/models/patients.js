import { Schema,model } from "mongoose";

const patientsSchema=new Schema(
    {
        name:{
            type:String,
            require:true
        },
        age:{
            type:String,
        },
        email:{
            type:String
        },
        password:{
            type:String,
            require:true
        },
        telephone:{
            type:String,
            require:true
        },
        isVerified:{
            type:Boolean,require:true
        }
    },{
        timestamps:true,
        strict:false
    }
);


export default model("Patients",patientsSchema);