import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { FaChevronRight } from "react-icons/fa6";
import { useEffect, useState } from "react";
import EmployeeAttendanceTable1 from "./EmployeeAttendanceTable1";
import axios from "axios";
export default function EmployeeAttendanceTable() {
    const [listint, setListing] = useState([]);
    const urlParams = new URLSearchParams(location.search);
    const searchTerm = urlParams.get("searchTerm");
    useEffect(() => {
        axios.get(`/api/attendance/get-EmployeeAttendance?searchTerm=${searchTerm || ''}`)
            .then((response) => {
            console.log("emplouye attendance", response.data);
            const data = response.data;
            setListing(data);
        })
            .catch((error) => {
            console.log(error);
        });
    }, [searchTerm]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 10;
    const startIndex = (currentPage - 1) * 10;
    const endIndex = startIndex + itemPerPage;
    const totalPages = Math.ceil(listint?.length / itemPerPage);
    const newAllUserTabledata = listint?.slice(startIndex, endIndex);
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: 'flex items-center justify-end gap-4\n       xsm:flex-col\n       min-[500px]:flex-row\n      ', children: _jsxs("div", { className: 'flex gap-2 items-center', children: [_jsx(FaChevronRight, { className: 'rotate-180 p-3 h-10 w-10 rounded-md  bg-[#212121] border cursor-pointer border-[#424242] ', onClick: () => setCurrentPage((p) => Math.max(p - 1, 1)) }), _jsxs("p", { className: '', children: [currentPage, "-", totalPages, " "] }), _jsx(FaChevronRight, { className: 'p-3 rounded-md h-10 w-10 bg-[#212121] border cursor-pointer border-[#424242] ', onClick: () => setCurrentPage((p) => Math.min(p + 1, totalPages)) })] }) }), _jsx("div", { children: _jsx(EmployeeAttendanceTable1, { newAllUserTabledata: newAllUserTabledata }) })] }));
}
