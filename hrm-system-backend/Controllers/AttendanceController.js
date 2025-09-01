import Attendance from "../Modals/Attendance.modal.js";

export const createAttendance = async (req, res) => {
    console.log(req.body);
   const {employeeId, checkin}=req.body;

   const attendance = await Attendance.create({
       emp_Ref:employeeId,
       checkin,
       date: new Date(),
       status: 'present'
   });
   res.status(201).json("Attendance Marked Successfully");
}


