import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import SearchInput from '@/Components/Common/Navbar/Input';
import PayrollTable from '@/Sections/Payroll/PayrollTable';
import PayrollTitle from '@/Sections/Payroll/PayrollTitle';
export default function Payroll() {
    return (_jsxs("div", { className: 'bg-[#2B2B2B] p-4 flex flex-col gap-8 rounded-2xl', children: [_jsx(PayrollTitle, {}), _jsx(SearchInput, { placeholder: "Enter Month" }), _jsx(PayrollTable, {})] }));
}
