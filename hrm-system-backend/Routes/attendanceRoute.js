import express from 'express'
import { createAttendance } from '../Controllers/AttendanceController.js';
import { VerifyToken } from '../Utlis/VerifyToken.js';


const Router = express.Router();


Router.post('/create-attendance',VerifyToken,createAttendance)



export default Router;