import express from 'express'
import { employeeCreate ,getEmployees} from '../Controllers/EmployeeController.js';
import { VerifyToken } from '../Utlis/VerifyToken.js';


const Routes = express.Router();


Routes.post('/createEmployee',VerifyToken,employeeCreate)
Routes.get('/getEmployees',VerifyToken,getEmployees)


export default Routes;