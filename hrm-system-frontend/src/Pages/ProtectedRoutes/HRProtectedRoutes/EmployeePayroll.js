import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import SearchInput from '@/Components/Common/Navbar/Input';
import EmployeePayrollTitle from '@/Sections/EmployeePayroll/EmployeePayrollTitle';
import PayrollTable from '@/Sections/Payroll/PayrollTable';
export default function EmployeePayroll() {
    return (_jsxs("div", { className: 'bg-[#2B2B2B] p-4 flex flex-col gap-8 rounded-2xl', children: [_jsx(EmployeePayrollTitle, {}), _jsx(SearchInput, { placeholder: "Enter Employee name or EmpId" }), _jsx(PayrollTable, {})] }));
}
