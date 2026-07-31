import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { SelectMonth } from '../Leave/SelectMonth';
export default function AttendanceHistoryTitle() {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: 'flex items-center justify-between p-4\n     xsm:flex-col xsm:text-center xsm:gap-4 xsm:p-2\n     sm:flex-row sm:text-start \n    ', children: [_jsxs("div", { children: [_jsx("h1", { className: 'text-2xl font-semibold', children: "Attendance History" }), _jsx("p", { className: 'text-[14px] opacity-50', children: "View your previous Attendance record" })] }), _jsx("div", { className: "flex items-center gap-4", children: _jsx(SelectMonth, {}) })] }) }));
}
