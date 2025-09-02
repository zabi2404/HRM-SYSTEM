import express from 'express'
import { VerifyToken } from '../Utlis/VerifyToken.js';
import { getLeaveBalance,createLeave ,getAppliedLeave,getAppliedLeaves,updateLeave, deleteLeave, LeaveByid} from '../Controllers/LeaveController.js';

const Router = express.Router();

Router.post('/create-leave/:id',VerifyToken,createLeave)
Router.get('/get-leave-balance/:id',VerifyToken,getLeaveBalance)
Router.get('/get-Appliedleave/:id',VerifyToken,getAppliedLeave)
Router.get('/get-Appliedleaves',VerifyToken,getAppliedLeaves)
Router.post('/update-leave/:id',VerifyToken,updateLeave) 
Router.delete('/delete-leave/:id',VerifyToken,deleteLeave)
Router.get('/get-leaveById/:id',VerifyToken,LeaveByid)
export default Router;

 