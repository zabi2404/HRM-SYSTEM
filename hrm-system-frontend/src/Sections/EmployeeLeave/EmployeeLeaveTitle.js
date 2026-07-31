import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { SelectDemo } from '@/Components/LeaveSelectType';
import { useState } from 'react';
export default function EmployeeLeaveTitle({ onChange }) {
    const [type, setType] = useState('');
    console.log("from title", type);
    onChange(type);
    return (_jsx(_Fragment, { children: _jsxs("div", { className: 'flex items-center justify-between p-4\n      xsm:flex-col xsm:text-center xsm:gap-4 xsm:p-2\n      sm:flex-row sm:text-start \n    ', children: [_jsxs("div", { children: [_jsx("h1", { className: 'text-2xl font-semibold', children: "Emplopyees Leaves" }), _jsx("p", { className: 'text-[14px] opacity-50', children: "Manage Emplopyees Leaves" })] }), _jsx("div", { className: "flex items-center gap-4", children: _jsx(SelectDemo, { onChange: (val) => {
                            setType(val);
                        } }) })] }) }));
}
