import express from 'express'
import { employeeCreate ,getEmployees,getEmployee,deleteEmployees, updateEmployee} from '../Controllers/EmployeeController.js';
import { VerifyToken } from '../Utlis/VerifyToken.js';


const Routes = express.Router();


Routes.post('/createEmployee',VerifyToken,employeeCreate)
Routes.get('/getEmployees',VerifyToken,getEmployees)
Routes.get('/getEmployee/:id',VerifyToken,getEmployee)
Routes.delete('/delete-employee/:id',VerifyToken,deleteEmployees)
Routes.post('/update-employee/:id',VerifyToken,updateEmployee)



export default Routes;