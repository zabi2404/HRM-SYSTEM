import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import EmployeeAttendanceTable from '@/Sections/EmployeeAttendance.tsx/EmployeeAttendanceTable';
import EmployeeAttendanceTitle from '@/Sections/EmployeeAttendance.tsx/EmployeeAttendanceTitle';
export default function EmployeeAttendance() {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: 'bg-[#2B2B2B] p-4 flex flex-col gap-8 rounded-2xl', children: [_jsx(EmployeeAttendanceTitle, {}), _jsx(EmployeeAttendanceTable, {})] }) }));
}
