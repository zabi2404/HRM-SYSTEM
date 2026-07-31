import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import AtendanceCardSection from '@/Sections/Attendance/AtendanceCardSection';
import AttendanceHistoryTable from '@/Sections/Attendance/AttendanceHistoryTable';
import AttendanceHistoryTitle from '@/Sections/Attendance/AttendanceHistoryTitle';
import AttendanceTitle from '@/Sections/Attendance/AttendanceTitle';
export default function Attendance() {
    return (_jsx(_Fragment, { children: _jsxs("div", { children: [_jsx(AttendanceTitle, {}), _jsx(AtendanceCardSection, {}), _jsxs("div", { className: 'bg-[#2B2B2B] p-4 flex flex-col gap-8 rounded-2xl mt-4', children: [_jsx(AttendanceHistoryTitle, {}), _jsx(AttendanceHistoryTable, {})] }), _jsx("div", {})] }) }));
}
