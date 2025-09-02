import Leave from "../Modals/Leave_modal.js";
import LeaveBalance from "../Modals/LeaveBalance_modal.js";
import { calculateLeaveDays } from "../Utlis/Daycalcultation.js";
import { HandleError } from "../Utlis/error.js";

export const getLeaveBalance = async (req, res, next) => {
    const id = req.params.id
    try {
        const leavebalance = await LeaveBalance.findOne({ employee_Ref: id })
        if (!leavebalance) { return next(HandleError(404, 'No record Found for this User')) }
        res.status(200).json(leavebalance)
    } catch (error) {
        next(error)
    }

}


export const createLeave = async (req, res, next) => {
    const id = req.params.id

    const { leaveType, days, description, file, from, to } = req.body

    try {
        const createLeave = await Leave.create({
            type: leaveType,
            days,
            description,
            file,
            start: from,
            end: to,
            employee_Ref: id
        })

        res.status(201).json("Successfully Created")

    } catch (error) {
        next(error)
    }

}


export const getAppliedLeave = async (req, res, next) => {
    const id = req.params.id

    let status = req.query.status;
    if (status === undefined) {
        status = { $in: ['approved', 'rejected'] }
    }

    try {
        const leaves = await Leave.find({ employee_Ref: id, status })
        if (!leaves) { return res.json("No Leave found of this employee") }
        res.status(200).json(leaves)
    } catch (error) {
        next(error)
    }
}



export const LeaveByid = async (req, res, next) => {
    const { id } = req.params;
    console.log(id)
    try {

        const leave = await Leave.findById(id);
        res.status(200).json(leave)
    } catch (error) {
        next(error)
    }
}
// filter leave

export const getAppliedLeaves = async (req, res, next) => {


    let type = req.query.type;
    console.log(type)
    if (type === "undefined" || type === 'all') {
        type = { $in: ["Sick", "other"] }
    }
    let status = req.query.status;
    if (status === "undefined") {
        status = { $in: ['rejected', 'approved'] }
    }
    try {
        const leaves = await Leave.find({ type, status, }).populate("employee_Ref", 'name employeeCode ')
        if (!leaves) { return res.json("No Leave found of this employee") }
        res.status(200).json(leaves)
    } catch (error) {
        next(error)
    }
}


// update leave by hr mean approving leave

export const updateLeave = async (req, res, next) => {
    // const {role}=req.decoded;

    const id = req.params.id
    const { status } = req.body
    try {
        const leave = await Leave.findOne({_id:id});
        if (!leave) { return next(HandleError(404, 'No record Found for this User')) }


        const leavebalance = await LeaveBalance.findOne({employee_Ref: leave.employee_Ref})
       
        if(leave.type==='Sick'){
            if(leave.days==='single'){
                leavebalance.remainingAnnualLeave-=1
                leavebalance.remainingSickLeave-=1
                leavebalance.usedAnnualLeave+=1
                leavebalance.usedSickLeave+=1
            }else{
              const days = calculateLeaveDays(leave.start,leave.end);
              leavebalance.remainingAnnualLeave-=days
                leavebalance.remainingSickLeave-=days
                leavebalance.usedAnnualLeave+=days
                leavebalance.usedSickLeave+=days
            }
        }
        if(leave.type==='other'){
            if(leave.days==='single'){
                leavebalance.remainingAnnualLeave-=1
                leavebalance.remainingCasualLeave-=1
                leavebalance.usedCasualLeave+=1
                leavebalance.usedAnnualLeave+=1
            }else{
                const days = calculateLeaveDays(leave.start,leave.end);
                leavebalance.remainingAnnualLeave-=days
                leavebalance.remainingCasualLeave-=days
                leavebalance.usedCasualLeave+=days
                leavebalance.usedAnnualLeave+=days
            }
        }
        await leavebalance.save()
        console.log(leave)

        const Updatedleave = await Leave.findByIdAndUpdate(id, { status }, { new: true });

        res.status(200).json(Updatedleave)
    } catch (error) {
        next(error)
    }
}


export const UserUpdateLeave = async (req, res, next) => {
    const id = req.params.id;
    console.log(req.body)
    try {

        const updatedLeave = await Leave.findByIdAndUpdate(
            id,
            {
                type: req.body.leaveType,
                days: req.body.days,
                start: req.body.from,
                end: req.body.to,
                description: req.body.description,
                file: req.body.file
            }
            , { new: true, runValidators: true }
        )

        res.status(200).json(updatedLeave)
    } catch (error) {
        next(error)
    }

}


export const deleteLeave = async (req, res, next) => {
    const id = req.params.id
    try {
        await Leave.findByIdAndDelete(id)
        res.status(200).json("successfully Deleted the Leave")
    } catch (error) {
        next(error)
    }


}