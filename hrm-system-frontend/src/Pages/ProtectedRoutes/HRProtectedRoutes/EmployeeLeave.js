import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import EmployeeLeaveHistoryTable from '@/Sections/EmployeeLeave/EmployeeLeaveHistoryTable';
import EmployeeLeaveHistoryTitle from '@/Sections/EmployeeLeave/EmployeeLeaveHistoryTitle';
import EmployeeLeaveTable from '@/Sections/EmployeeLeave/EmployeeLeaveTable';
import EmployeeLeaveTitle from '@/Sections/EmployeeLeave/EmployeeLeaveTitle';
import { useState } from 'react';
export default function EmployeeLeave() {
    const [type, setType] = useState('');
    const [historyType, sethistoryType] = useState('');
    console.log("from main page", type);
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: 'bg-[#2B2B2B] p-4 flex flex-col gap-8 rounded-2xl', children: [_jsx(EmployeeLeaveTitle, { onChange: (val) => {
                            setType(val);
                        } }), _jsx(EmployeeLeaveTable, { type: type })] }), _jsxs("div", { className: 'bg-[#2B2B2B] p-4 flex flex-col gap-8 rounded-2xl mt-4', children: [_jsx(EmployeeLeaveHistoryTitle, { sethistoryType: (val) => {
                            sethistoryType(val);
                        } }), _jsx(EmployeeLeaveHistoryTable, { type: historyType })] })] }));
}
