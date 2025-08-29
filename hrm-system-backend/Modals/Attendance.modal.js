import mongoose from "mongoose";

const AttendanceSchema = new mongoose.Schema({

    checkin:{
        type:String,
        required:true
    },
    checkout:{
        type:String,
        required:true
    },
    overtime:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    status:{
        type:String,

    },
    emp_Ref:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'employee',
        required:true,
        unique: true
    }
},{timestamps:true});

const Attendance = mongoose.model('attendance',AttendanceSchema);

export default Attendance;
