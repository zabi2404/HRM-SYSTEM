import mongoose from "mongoose";

const LeaveBalanceSchema = mongoose.Schema({

    year: {
        type:  Number,
        default:new Date().getFullYear(),
        required: true,
    }
    ,
    totalAnnualLeave: {
        type: Number,
        default: 60
    },
    totalSickLeave: {
        type: Number,
        default: 30
    },
    totalCasualLeave: {
        type: Number,
        default: 30
    },
    usedAnnualLeave: {
        type: Number,
        default: 0
    },
    usedSickLeave: {
        type: Number,
        default: 0
    },
    usedCasualLeave: {
        type: Number,
        default: 0
    },
    remainingAnnualLeave: {
        type: Number,
        default: 30
    },
    remainingSickLeave: {
        type: Number,
        default: 30
    },
    remainingCasualLeave: {
        type: Number,
        default: 30
    },
    employee_Ref:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'employee',
        required:true,
        unique:true
    }

})


const LeaveBalance = mongoose.model('leavebalance', LeaveBalanceSchema);
export default LeaveBalance;


