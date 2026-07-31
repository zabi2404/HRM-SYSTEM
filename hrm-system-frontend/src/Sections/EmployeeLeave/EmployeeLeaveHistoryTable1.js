import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Badge } from '@/Components/Common/badge';
export default function EmployeeLeaveHistoryTable1({ newAllUserTabledata, fallback }) {
    function daysInclusive(from, to = from) {
        const start = new Date(from + "T00:00:00Z");
        const end = new Date(to + "T00:00:00Z");
        const msPerDay = 24 * 60 * 60 * 1000;
        return Math.floor((end - start) / msPerDay) + 1;
    }
    return (_jsxs("div", { className: "overflow-auto customScroll max-h-screen  w-full", children: [_jsxs("table", { className: "min-w-[1040px] w-full text-white text-sm", children: [_jsx("thead", { children: _jsxs("tr", { className: 'bg-[#212121] ', children: [_jsx("th", { className: 'w-1/9 p-6 rounded-l-lg text-nowrap', children: "Employee ID" }), _jsx("th", { className: 'w-1/9', children: "Name" }), _jsx("th", { className: 'w-1/9', children: "From" }), _jsx("th", { className: 'w-1/9', children: "To" }), _jsx("th", { className: 'w-1/9', children: "Total Days" }), _jsx("th", { className: 'w-1/9', children: "Type" }), _jsx("th", { className: 'w-1/9', children: "Attachment" }), _jsx("th", { className: 'w-1/9 rounded-r-lg', children: "Status" })] }) }), newAllUserTabledata?.length > 0 &&
                        _jsx("tbody", { children: newAllUserTabledata?.map((item) => (_jsxs("tr", { className: 'text-center', children: [_jsx("td", { children: item.employee_Ref.employeeCode }), _jsx("td", { children: item.employee_Ref.name }), _jsx("td", { className: 'p-8', children: _jsx("div", { className: 'text-start', children: _jsx("p", { className: 'text-nowrap', children: item.start }) }) }), _jsx("td", { children: item.end || "-" }), _jsx("td", { children: daysInclusive(item.start, item.end) || "1" }), _jsx("td", { children: item.type }), _jsx("td", { children: item.file || "-" }), _jsx("td", { className: 'pl-6', children: _jsxs(Badge, { className: ` px-4 py-2 text-white ${item.status === 'approved' ? "bg-green-800" : "bg-red-800"}`, children: [" ", item.status] }) })] }, item.id))) })] }), newAllUserTabledata?.length == 0 &&
                _jsx("h1", { className: 'font-script text-3xl flex justify-center font-bold text-nowrap mt-4', children: fallback })] }));
}
