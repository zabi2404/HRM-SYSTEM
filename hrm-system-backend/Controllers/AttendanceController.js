import Attendance from "../Modals/Attendance.modal.js";

export const createAttendance = async (req, res) => {
   
   const {employeeId, checkin}=req.body;
const today = new Date().toISOString().split("T")[0]
   const attendance = await Attendance.create({
       emp_Ref:employeeId,
       checkin,
       date: today, // Set time to midnight for date comparison
       status: 'present'
   });
   res.status(201).json("Attendance Marked Successfully");
}



export const updateAttendance = async (req, res) => {
    const {employeeId, checkout}=req.body;
    const attendance = await Attendance.findOne({ emp_Ref: employeeId, date: { $gte: new Date().setHours(0, 0, 0, 0),
         $lt: new Date().setHours(23, 59, 59, 999) } }); //mean onl getting the todays attendance not the previous one
    if (!attendance) {
        return res.status(404).json("Attendance not found for today");
    }
    attendance.checkout = checkout;
    await attendance.save();
    res.status(200).json("Attendance Updated Successfully");
}


export const getAttendance = async (req, res) => {
    const employeeId=req.params.employeeId;
    try {
        
        const attendance = await Attendance.find({emp_Ref: employeeId});
        res.status(200).json(attendance);

    } catch (error) {
        next(error);
    }

}


export const getEmplopyeeAttendance = async (req, res,next) => {

    const {role} = req.decoded;

    
    if (role === "admin" || role === "hr") {
        
        try {
            
            const startOfDay = new Date();
            startOfDay.setHours(0, 0, 0, 0);
      
            const endOfDay = new Date();
            endOfDay.setHours(23, 59, 59, 999);
      
            const attendance = await Attendance.find({
              date: { $gte: startOfDay, $lt: endOfDay },
            }).populate('emp_Ref', 'employeeCode');
            res.status(200).json(attendance);
        } catch (error) {
            next(error)
        }

    }
    else{
        next(HandleError(403, "You are not allow to access this page")

        )
    }

}