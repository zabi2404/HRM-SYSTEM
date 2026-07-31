import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import LeaveTitle from '@/Sections/Leave/LeaveTitle';
import LeaveTable from '@/Sections/Leave/LeaveTable';
import LeaveCards from '@/Sections/Leave/LeaveCards';
import LeaveHistoryTable from '@/Sections/Leave/LeaveHistoryTable';
import LeaveHistoryTitle from '@/Sections/Leave/LeaveHistoryTitle';
export default function Leave() {
    return (_jsxs(_Fragment, { children: [_jsx(LeaveCards, {}), _jsxs("div", { className: 'bg-[#2B2B2B] px-4 flex flex-col gap-8 rounded-2xl my-8', children: [_jsx(LeaveTitle, {}), _jsx(LeaveTable, {})] }), _jsxs("div", { className: 'bg-[#2B2B2B] p-4 flex flex-col gap-8 rounded-2xl', children: [_jsx(LeaveHistoryTitle, {}), _jsx(LeaveHistoryTable, {})] })] }));
}
