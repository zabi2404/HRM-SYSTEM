import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Badge } from '@/Components/Common/badge';
import { LeaveDelConfirmButton } from './LeaveDelConfirmButton';
import { EditLeavedialouge } from './EditLeavedialouge';
export default function Table1({ newAllUserTabledata }) {
    function daysInclusive(from, to = from) {
        const start = new Date(from + "T00:00:00Z");
        const end = new Date(to + "T00:00:00Z");
        const msPerDay = 24 * 60 * 60 * 1000;
        return Math.floor((end - start) / msPerDay) + 1;
    }
    console.log(newAllUserTabledata);
    return (_jsxs("div", { className: "overflow-auto customScroll max-h-screen  w-full", children: [_jsxs("table", { className: "min-w-[1040px] w-full text-white text-sm", children: [_jsx("thead", { children: _jsxs("tr", { className: 'bg-[#212121] ', children: [_jsx("th", { className: 'w-1/7  p-6 rounded-l-lg', children: "From" }), _jsx("th", { className: 'w-1/7', children: "To" }), _jsx("th", { className: 'w-1/7', children: "Total Days" }), _jsx("th", { className: 'w-1/7', children: "Type" }), _jsx("th", { className: 'w-1/7', children: "Attachment" }), _jsx("th", { className: 'w-1/7', children: "Status" }), _jsx("th", { className: 'w-1/7 rounded-r-lg', children: "Action" })] }) }), newAllUserTabledata?.length > 0 &&
                        _jsx("tbody", { children: newAllUserTabledata?.map((item) => (_jsxs("tr", { className: 'text-center', children: [_jsx("td", { className: 'p-8', children: _jsxs("div", { className: 'text-start', children: [_jsx("p", { className: 'text-nowrap', children: item.start }), _jsx("p", { className: 'text-xs text-gray-400', children: item.email })] }) }), _jsx("td", { children: item.end || "-" }), _jsx("td", { children: daysInclusive(item.start, item.end) || "1" }), _jsx("td", { children: item.type }), _jsx("td", { children: item.file || "-" }), _jsx("td", { children: _jsx(Badge, { className: " px-4 py-2 ", children: item.status }) }), _jsx("td", { children: _jsxs("div", { className: 'flex gap-2 justify-center items-center', children: [_jsx(EditLeavedialouge, { LeaveId: item?._id }), _jsx(LeaveDelConfirmButton, { LeaveId: item?._id })] }) })] }, item.id))) })] }), newAllUserTabledata?.length == 0 &&
                _jsx("h1", { className: 'font-script text-3xl flex justify-center font-bold text-nowrap my-4', children: "Have No Leave History" })] }));
}
