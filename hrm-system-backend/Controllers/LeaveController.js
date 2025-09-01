import Leave from "../Modals/Leave_modal.js";
import LeaveBalance from "../Modals/LeaveBalance_modal.js";
import { HandleError } from "../Utlis/error.js";

export const getLeaveBalance = async(req, res, next) => {
const id = req.params.id
    try {
        const leavebalance = await LeaveBalance.findOne({employee_Ref:id})
        if(!leavebalance){return next(HandleError(404,'No record Found for this User'))}
        res.status(200).json(leavebalance)
    } catch (error) {
        next(error)
    }

}


export const createLeave = async(req,res,next)=>{
        const id = req.params.id
        
    const {leaveType,days,description,file,from,to}=req.body

    try {
        const createLeave = await Leave.create({
            type: leaveType, 
            days,
            description,
            file,
            start:from,
            end:to,
            employee_Ref:id
        })

        res.status(201).json("Successfully Created")
        
    } catch (error) {
        next(error)
    }

}


export const getAppliedLeave = async(req,res,next)=>{
    const id = req.params.id
  
    let status = req.query.status;
    if (status === undefined  ) {
        status = { $in: ['approved', 'rejected'] }
    }
    
    try {
        const leaves=await Leave.find({employee_Ref:id , status})
        if(!leaves){return res.json("No Leave found of this employee")}
        res.status(200).json(leaves)
    } catch (error) {
        next(error)
    }
}
// filter leave

export const getAppliedLeaves = async(req,res,next)=>{

  
    let type = req.query.type;
    console.log(type)
    if (type === "undefined"|| type==='all') {
        type = { $in: ["Sick", "other"] }
    }
    let status = req.query.status;
    if(status==="undefined"){
        status = { $in: ['rejected', 'approved'] }
    }
    try {
        const leaves = await Leave.find({  type,status})
        if(!leaves){return res.json("No Leave found of this employee")}
        res.status(200).json(leaves)
    } catch (error) {
        next(error)
    }
}


// update leave

export const updateLeave = async(req,res,next)=>{
    const id = req.params.id
    const {status}=req.body
    try {
        const leave=await Leave.findByIdAndUpdate(id,{status},{new:true})
        if(!leave){return next(HandleError(404,'No record Found for this User'))}
        res.status(200).json(leave)
    } catch (error) {
        next(error)
    }
}