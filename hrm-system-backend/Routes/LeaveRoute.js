import express from 'express'
import { VerifyToken } from '../Utlis/VerifyToken.js';
import { getLeaveBalance,createLeave ,getAppliedLeave,getAppliedLeaves,updateLeave} from '../Controllers/LeaveController.js';

const Router = express.Router();

Router.post('/create-leave/:id',VerifyToken,createLeave)
Router.get('/get-leave-balance/:id',VerifyToken,getLeaveBalance)
Router.get('/get-Appliedleave/:id',VerifyToken,getAppliedLeave)
Router.get('/get-Appliedleaves',VerifyToken,getAppliedLeaves)
Router.post('/update-leave/:id',VerifyToken,updateLeave) 


export default Router;

 