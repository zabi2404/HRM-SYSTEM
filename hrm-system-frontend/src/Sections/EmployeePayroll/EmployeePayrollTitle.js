import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { SelectMonth } from '../Leave/SelectMonth';
export default function EmployeePayrollTitle() {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: 'flex items-center justify-between p-4', children: [_jsxs("div", { children: [_jsx("h1", { className: 'text-2xl font-semibold', children: "Employee Payroll" }), _jsx("p", { className: 'text-[14px] opacity-50', children: "View all Emplopyee Payroll " })] }), _jsx(SelectMonth, {})] }) }));
}
