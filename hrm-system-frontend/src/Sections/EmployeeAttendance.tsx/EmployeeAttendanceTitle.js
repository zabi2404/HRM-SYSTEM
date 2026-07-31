import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
export default function EmployeeAttendanceTitle() {
    const [type, setType] = useState('');
    console.log(type);
    return (_jsx(_Fragment, { children: _jsx("div", { className: 'flex items-center justify-between p-4\n     xsm:flex-col xsm:text-center xsm:gap-4 xsm:p-2\n     sm:flex-row sm:text-start \n    ', children: _jsxs("div", { children: [_jsx("h1", { className: 'text-2xl font-semibold', children: "Emplopyees Attendance" }), _jsx("p", { className: 'text-[14px] opacity-50', children: "View Emplopyees Attendance" })] }) }) }));
}
