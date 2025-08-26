import mongoose, { model } from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        min:8,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        default:"employee"
    },
    status:{
        type:String,
        default:"active"
    }
},{timestamps:true});

const User = mongoose.model("user",userSchema);
export default User;