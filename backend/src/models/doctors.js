import { Schema,model } from "mongoose";

const doctorsChema= new Schema(
    {
        Name:{
            type: String,
            require:true
        },
        specialty:{
            type:String,
            require:true
        },
        email:{
            type:String
        },
        password:{
            type:String,
            require:true
        }
    },
    {
        timestamps:true,
        strict:false
    }
);

export default model("Doctors",doctorsChema);