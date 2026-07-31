import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { Button } from '../../Components/Common/ui/button';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, } from "../../Components/Common/ui/dialog";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { ClockIn, ClockOut } from '@/Redux/attendance/attendanceSlice';
import { toast } from 'sonner';
import { Start, Success } from '../../Redux/user/loadingErrorSlice';
export function TimerButtonModal({ isOpen, onClose }) {
    const dispatch = useDispatch();
    const attendance = useSelector((state) => state.attendance.Attendance);
    const user = useSelector((state) => state.user.currentUser);
    const handleClockIn = () => {
        dispatch(Start());
        axios.post(`/api/attendance/create-attendance`, {
            employeeId: user.employeeId,
            checkin: new Date().toLocaleTimeString(),
        })
            .then((res) => {
            console.log(res.data);
            toast.success("Clock in successfully");
            dispatch(ClockIn());
            dispatch(Success());
        })
            .catch((err) => {
            dispatch(Success());
            console.log(err);
        });
    };
    // const handleClockOut = () => {
    //   dispatch(Start())
    //  axios.post(`/api/attendance/update-attendance`, {
    //   employeeId: user.employeeId,
    //   checkout: new Date().toLocaleTimeString(),
    //  })
    //  .then((response)=>{
    //  toast.success('Clock out successfully');
    //  dispatch(ClockOut());
    //  dispatch(Success())
    //  })
    //  .catch((error)=>{
    //   toast.error('Error in clock out');
    //   console.log(error.message)
    //   dispatch(Success())
    //  })
    // }
    const handleClockOut = () => {
        dispatch(ClockOut());
    };
    const [time, setTime] = useState("");
    // clock
    const currentTime = () => {
        const time = new Date().toLocaleTimeString();
        setTime(time);
    };
    setInterval(currentTime, 1000);
    const [canClockOut, setCanClockOut] = useState(false);
    useEffect(() => {
        const checkTime = () => {
            const now = new Date();
            const hours = now.getHours();
            // if current time is 0:00 (midnight) or later
            if (hours >= 0) {
                setCanClockOut(true);
            }
        };
        checkTime();
        const interval = setInterval(checkTime, 60000); // check every minute
        return () => clearInterval(interval);
    }, []);
    if (!isOpen) {
        return null;
    }
    return (_jsx(Dialog, { open: isOpen, onOpenChange: onClose, children: _jsxs(DialogContent, { className: "sm:max-w-[425px]", children: [_jsxs(DialogHeader, { children: [_jsxs(DialogTitle, { children: ["Clock ", attendance ? "Out" : "In", " at ", time] }), _jsx(DialogDescription, {})] }), _jsxs(DialogFooter, { className: 'flex !justify-center items-center', children: [_jsx(DialogClose, { asChild: true, children: _jsx(Button, { variant: "outline", onClick: onClose, children: "Cancel" }) }), !attendance ?
                            _jsx(DialogClose, { asChild: true, children: _jsx(Button, { onClick: handleClockIn, className: 'cursor-pointer', children: "Clock In" }) })
                            :
                                _jsx(DialogClose, { asChild: true, children: _jsx(Button, { onClick: handleClockOut, className: 'cursor-pointer', children: "Clock Out" }) })] })] }) }));
}
