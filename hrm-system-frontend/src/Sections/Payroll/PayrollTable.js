import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { FaChevronRight } from "react-icons/fa6";
import { AllUserTabledata } from '../../../public/Data';
import { useState } from "react";
import PayrollTable1 from "./PayrollTable1";
export default function PayrollTable() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 10;
    const startIndex = (currentPage - 1) * 10;
    const endIndex = startIndex + itemPerPage;
    const totalListData = AllUserTabledata.length;
    const totalPages = Math.ceil(AllUserTabledata.length / itemPerPage);
    const newAllUserTabledata = AllUserTabledata.slice(startIndex, endIndex);
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: 'flex items-center justify-end gap-4', children: _jsxs("div", { className: 'flex gap-2 items-center', children: [_jsx(FaChevronRight, { className: 'rotate-180 p-3 h-10 w-10 rounded-md  bg-[#212121] border cursor-pointer border-[#424242] ', onClick: () => setCurrentPage((p) => Math.max(p - 1, 1)) }), _jsxs("p", { className: '', children: [startIndex, "-", endIndex, " of ", totalListData] }), _jsx(FaChevronRight, { className: 'p-3 rounded-md h-10 w-10 bg-[#212121] border cursor-pointer border-[#424242] ', onClick: () => setCurrentPage((p) => Math.min(p + 1, totalPages)) })] }) }), _jsx("div", { children: _jsx(PayrollTable1, { newAllUserTabledata: newAllUserTabledata }) })] }));
}
