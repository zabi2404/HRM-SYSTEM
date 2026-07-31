import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { AddNewReq } from '@/Components/Employee/Leave/AddNewReq';
export default function LeaveTitle() {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: 'flex items-center justify-between p-4\n    xsm:flex-col xsm:gap-4 xsm:text-center\n    sm:flex-row sm:text-start \n    ', children: [_jsxs("div", { children: [_jsx("h1", { className: 'text-2xl font-semibold', children: "Leaves" }), _jsx("p", { className: 'text-[14px] opacity-50', children: "Manage your Leaves" })] }), _jsx("div", { className: "flex items-center gap-4", children: _jsx(AddNewReq, {}) })] }) }));
}
