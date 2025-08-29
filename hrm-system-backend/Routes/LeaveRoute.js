import express from 'express'
import { VerifyToken } from '../Utlis/VerifyToken.js';
import { getLeaveBalance } from '../Controllers/LeaveController.js';

const Router = express.Router();

Router.get('/get-leave-balance/:id',VerifyToken,getLeaveBalance)

export default Router;

