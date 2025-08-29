import mongoose from 'mongoose'

const EmployeeSchema = new mongoose.Schema({

    user_Ref: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    job_title: {
        type: String,
        required: true,
    }
    ,
    employeeCode: {
        type: String,
        required: true,
        unique: true
    },
    joining_date: {
        type: Date,

    },
    department: {
        type: String,
    },
    salery: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    contact_number: {
        type: String,
        required: true
    },
    img: {
        type: String,
        default: ''
    },
    dob: {
        type: Date,
    },
    gender: {
        type: String,
    },
    city: {
        type: String
    },
    instution: {
        type: String
    },
    degree: {
        type: String
    },
    year: {
        type: Number
    },
    experience: {
        type: String
    },
    achievment: {
        type: String
    },
    skills: {
        type: String
    },
}, { timestamps: true });

const Employee = mongoose.model("employee", EmployeeSchema)

export default Employee;