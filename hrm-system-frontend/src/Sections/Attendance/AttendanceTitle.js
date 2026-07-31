import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { BiTimer } from "react-icons/bi";
import { TimerButtonModal } from './TimerButtonModal';
import { useSelector } from 'react-redux';
export default function AttendanceTitle() {
    const [isOpen, setIsOpen] = useState(false);
    const [time, setTime] = useState("");
    const currentTime = () => {
        const time = new Date().toLocaleTimeString();
        setTime(time);
    };
    setInterval(currentTime, 1000);
    const attendance = useSelector((state) => state.attendance.Attendance);
    return (_jsx(_Fragment, { children: _jsxs("div", { className: 'flex justify-between\n     xsm:flex-col xsm:text-center xsm:gap-4 xsm:p-2\n     sm:flex-row sm:text-start \n    ', children: [_jsxs("div", { children: [_jsx("h1", { className: 'text-2xl font-semibold', children: "My Attendance" }), _jsx("p", { className: 'text-[14px] opacity-50', children: "Manage your Attendance" })] }), _jsxs("div", { className: 'flex justify-center', children: [_jsxs("button", { className: 'flex cursor-pointer gap-3 items-center bg-white px-5 py-3 text-black rounded-md', onClick: () => { setIsOpen(true); }, children: [_jsx(BiTimer, { className: 'w-6 h-6' }), !attendance ?
                                    (`Clocks In at ${time}`) : (`Clocks Out at ${time}`)] }), _jsx(TimerButtonModal, { isOpen: isOpen, onClose: () => setIsOpen(false) })] })] }) }));
}
