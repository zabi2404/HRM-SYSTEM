import mongoose from "mongoose"

const LeaveSchema = new mongoose.Schema({
   user_Ref: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'employee',
        required: true,
        unique: true
    },
    type: {
        type: String,
        required: true,
    }
    ,
    start: {
        type: String,
        required: true,
    },
    end: {
        type: Date,
    },
    description:{
        type:String,
    } ,
    status: {
        type: String,
        required: true,
        default:'pending'
    }
})


const Leave = mongoose.model('leave',LeaveSchema)
export default Leave;

