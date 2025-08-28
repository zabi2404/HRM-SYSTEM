import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
    },
    Created_by:{
        type:mongoose.Schema.ObjectId,
        ref:'user',
        required:true,
    }
},{timestamps:true})
const Message = mongoose.model('message',MessageSchema);
export default  Message;