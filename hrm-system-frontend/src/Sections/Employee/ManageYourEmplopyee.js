import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { AddNewUser } from '@/Components/HR/Employee/AddNewUser';
export default function ManageYourEmplopyee() {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: 'flex  items-center justify-between p-4 \n      xsm:flex-col xsm:text-center xsm:gap-4 xsm:p-2\n      sm:flex-row sm:text-start \n      ', children: [_jsxs("div", { children: [_jsx("h1", { className: 'text-2xl font-semibold', children: "Emplopyee" }), _jsx("p", { className: 'text-[14px] opacity-50', children: "Manage your Employees" })] }), _jsx("div", { className: "flex items-center gap-4\n             \n             ", children: _jsx(AddNewUser, {}) })] }) }));
}
