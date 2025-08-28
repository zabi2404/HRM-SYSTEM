import Employee from "../Modals/Employee_modal.js";
import User from "../Modals/User_modal.js";
import { HandleError } from "../Utlis/error.js";


export const employeeCreate = async(req,res,next)=>{
    const { id, role } = req.decoded;
    const {email,job_title,joining_date,department,salery,address,contact_number}=req.body;
    if (role === 'admin' ||role ===  'hr') {   //only admin and hr can acccess this page
    
try {

    const user = await User.findOne({email});
    if(!user){return next(HandleError(404,"User not found"))}

    const lastEmployee = await Employee.findOne().sort({ createdAt: -1 });

    let newCode = "EMP1001"; // Default for first employee

    if (lastEmployee) {
      const lastCode = lastEmployee.employeeCode; // e.g. EMP1050
      const lastNumber = parseInt(lastCode.replace("EMP", "")); // 1050
      newCode = "EMP" + (lastNumber + 1); // EMP1051
    }
    
    const existingEmployee = await Employee.findOne({user_Ref:user._id});
    if(existingEmployee){return next(HandleError(400,"Employee profile already exists for this user "))}

    const employee =await Employee.create({
        user_Ref:user._id,
        employeeCode:newCode,
        job_title,
           joining_date,
           department,
           salery,
           address,
           contact_number
    })
    
res.status(201).json({message:"EmployeeCreated",employee})

} catch (error) {
    next(error)
}

    }  

}



export const getEmployees = async (req, res, next) => {
    const { role } = req.decoded;
  
    if (role === "admin" || role === "hr") {
      try {
        const employees = await Employee.find()
          .populate("user_Ref", "username email "); 
          // 👆 only fetch these fields from User
  
        res.status(200).json(employees);
      } catch (error) {
        next(error);
      }
    } else {
      res.status(403).json({ message: "Access denied" });
    }
  };
  