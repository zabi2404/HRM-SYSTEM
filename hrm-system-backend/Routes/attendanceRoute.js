import express from 'express'
import { createAttendance, getAttendance, getEmplopyeeAttendance, updateAttendance } from '../Controllers/AttendanceController.js';
import { VerifyToken } from '../Utlis/VerifyToken.js';


const Router = express.Router();


Router.post('/create-attendance',VerifyToken,createAttendance);
Router.post('/update-attendance',VerifyToken,updateAttendance);
Router.get('/get-attendance/:employeeId',VerifyToken,getAttendance);
Router.get('/get-EmployeeAttendance',VerifyToken,getEmplopyeeAttendance);

export default Router;