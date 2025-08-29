import mongoose from "mongoose"

const LeaveSchema = new mongoose.Schema({
   employee_Ref: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'employee',
        required: true,
       
    },
    type: {
        type: String,
        required: true,
    },
    days:{
        type:String,
        required:true
    }
    ,
    start: {
        type: String,
        required: true,
    },
    end: {
        type: String,
    },
    description:{
        type:String,
    } ,
    status: {
        type: String,
        default:'pending'
    },
    file:{
        type:String,
    }

})


const Leave = mongoose.model('leave',LeaveSchema)
export default Leave;

