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