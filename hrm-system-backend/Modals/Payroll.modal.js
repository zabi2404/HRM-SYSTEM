import mongoose from "mongoose";

const PayrollSchema = new mongoose.Schema({
    emp_Ref:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"employee",
        required:true,
        unique:true
    },
    month:{
        type:Date,
        required:true,
    },
    year:{
        type:Date,
        required:true,
    },
    salery:{
        type:Number,
        required:true,
    },
    overtime:{
        type:Number,
        required:true,
    },
    bonus:{
        type:Number,
        required:true,
    },
    deduction:{
        type:Number,
        required:true,
    },
})


const Payroll = mongoose.model('payroll',PayrollSchema);
export default Payroll;