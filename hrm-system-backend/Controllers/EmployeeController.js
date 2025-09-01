import Employee from "../Modals/Employee_modal.js";
import Leave from "../Modals/Leave_modal.js";
import LeaveBalance from "../Modals/LeaveBalance_modal.js";
import User from "../Modals/User_modal.js";
import { HandleError } from "../Utlis/error.js";


export const employeeCreate = async (req, res, next) => {
  const { id, role } = req.decoded;
  const { email, job_title, joining_date, department, salery, address, contact_number } = req.body;
  if (role === 'admin' || role === 'hr') {   //only admin and hr can acccess this page

    try {

      const user = await User.findOne({ email });
      if (!user) { return next(HandleError(404, "User not found")) }

      const lastEmployee = await Employee.findOne().sort({ createdAt: -1 });

      let newCode = "EMP1001"; // Default for first employee

      if (lastEmployee) {
        const lastCode = lastEmployee.employeeCode; // e.g. EMP1050
        const lastNumber = parseInt(lastCode.replace("EMP", "")); // 1050
        newCode = "EMP" + (lastNumber + 1); // EMP1051
      }

      const existingEmployee = await Employee.findOne({ user_Ref: user._id });
      if (existingEmployee) { return next(HandleError(400, "Employee profile already exists for this user ")) }

      const employee = await Employee.create({
        name: user.username,
        user_Ref: user._id,
        employeeCode: newCode,
        job_title,
        joining_date,
        department,
        salery,
        address,
        contact_number
      });
      const leavebalance = await LeaveBalance.create({
        employee_Ref: employee._id
      })

      res.status(201).json(employee)

    } catch (error) {
      next(error)
    }

  }
  else {
    return next(HandleError(403, "Forbidden: You are not allowed to create employees"));
  }

}



export const updateEmployee = async (req, res, next) => {
  const { id, role } = req.decoded;
  const _id = req.params.id
  if (role === 'admin' || role === 'hr') {   //only admin and hr can acccess this page
    
    try {
      
      const employee = await Employee.findOne({  $or: [
        { _id:  _id },         // match by Employee's _id
        { user_Ref:  _id }     // match by linked User's _id
      ] });
      if (!employee) { return next(HandleError(404, "Emplopyee profile not found for this user")) }
      
      const user = await User.findById(employee.user_Ref);
      if (!user) { return next(HandleError(404, "User not found")) }
      
      const updatedUser = await User.findByIdAndUpdate(
        employee.user_Ref,
        {
          email: req.body.email || user.email,
          username: req.body.name || user.username
        }
        ,
        { new: true, runValidators: true }
      );


      const updateEmployee = await Employee.findByIdAndUpdate(
        employee._id, 
        req.body,
        { new: true, runValidators: true }
      );

      const populateEmployee  = await  updateEmployee.populate("user_Ref", "username email");
      res.status(200).json(updateEmployee);
    } catch (error) {
      next(error)
    }
  }
  else {
    return next(HandleError(403, "Forbidden : You are not alllowed to make changes"));
  }
}



export const getEmployees = async (req, res, next) => {

  const { role } = req.decoded;

  if (role === "admin" || role === "hr") {
    try {

      const searchTerm = (req.query.searchTerm || "");
      const employees = await Employee.find({
        $or: [
       { name: { $regex: searchTerm, $options: 'i' }},
       { employeeCode: { $regex: searchTerm, $options: 'i' }}]
      })
        .populate("user_Ref", "username email ");

      res.status(200).json(employees);
    } catch (error) {
      next(error);
    }
  } else {
    res.status(403).json({ message: "Access denied" });
  }
};


export const getEmployee = async (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  try {
    const employee = await Employee.findOne({
      $or: [
        { _id: id },         // match by Employee's _id
        { user_Ref: id }     // match by linked User's _id
      ]
    }).populate("user_Ref", "username email");

    if (!employee) {
      return next(HandleError(404, "Employee not found"));
    }

    res.status(200).json(employee);
  } catch (error) {
    next(error);
  }
};



export const deleteEmployees = async (req, res, next) => {
  const id = req.params.id;

  try {
    // Find the employee by ID
    const employee = await Employee.findById(id);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    // Delete the related User
    if (employee.user_Ref) {
      await User.findByIdAndDelete(employee.user_Ref);
    }

    // Delete the Employee itself
    await Employee.findByIdAndDelete(id);

    // Delete related Leave & LeaveBalance
    await Leave.findOneAndDelete({ employee_Ref: id });
    await LeaveBalance.findOneAndDelete({ employee_Ref: id });

    res.status(200).json({ message: "Employee and related records deleted" });
  } catch (error) {
    next(error);
  }
};
