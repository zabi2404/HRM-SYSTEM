import mongoose from "mongoose";

const LeaveBalanceSchema = mongoose.Schema({
user_Ref: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
        unique: true
    },
    year: {
        type: Date,
        required: true,
    }
    ,
    totalAnnualLeave: {
        type: Number,
        default: 0
    },
    totalSickLeave: {
        type: Number,
        default: 0
    },
    totalCasualLeave: {
        type: Number,
        default: 0
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
        default: 0
    },
    remainingSickLeave: {
        type: Number,
        default: 0
    },
    remainingCasualLeave: {
        type: Number,
        default: 0
    },

})


const LeaveBalance = mongoose.model('leavebalance', LeaveBalanceSchema);
export default LeaveBalance;


