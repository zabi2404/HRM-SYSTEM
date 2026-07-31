import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { SelectMonth } from './SelectMonth';
export default function LeaveHistoryTitle() {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: 'flex items-center justify-between p-4\n    xsm:flex-col xsm:gap-4 xsm:text-center\n    sm:flex-row sm:gap-0 sm:text-start\n    ', children: [_jsxs("div", { children: [_jsx("h1", { className: 'text-2xl font-semibold', children: "Leaves History" }), _jsx("p", { className: 'text-[14px] opacity-50', children: "View your previous Leaves record" })] }), _jsx("div", { className: "flex items-center gap-4", children: _jsx(SelectMonth, {}) })] }) }));
}
