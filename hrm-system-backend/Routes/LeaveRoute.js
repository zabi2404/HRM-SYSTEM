import express from 'express'
import { VerifyToken } from '../Utlis/VerifyToken.js';
import { getLeaveBalance,createLeave ,getAppliedLeave,getAppliedLeaves} from '../Controllers/LeaveController.js';

const Router = express.Router();

Router.post('/create-leave/:id',VerifyToken,createLeave)
Router.get('/get-leave-balance/:id',VerifyToken,getLeaveBalance)
Router.get('/get-Appliedleave/:id',VerifyToken,getAppliedLeave)
Router.get('/get-Appliedleaves',VerifyToken,getAppliedLeaves)



export default Router;

