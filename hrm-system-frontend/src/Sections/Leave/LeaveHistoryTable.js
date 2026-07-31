import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { FaChevronRight } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import LeaveHistoryTable1 from "./LeaveHistoryTable1";
export default function LeaveHistoryTable() {
    const User = useSelector((state) => state.user.currentUser);
    const [listing, setListing] = useState();
    useEffect(() => {
        axios.get(`/api/leave/get-Appliedleave/${User.employeeId}?status=approved`)
            .then((Response) => {
            const data = Response.data;
            setListing(data);
            console.log(data);
        })
            .catch((err) => console.log(err));
    }, []);
    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 10;
    const startIndex = (currentPage - 1) * 10;
    const endIndex = startIndex + itemPerPage;
    const totalPages = Math.ceil(listing?.length / itemPerPage);
    const newAllUserTabledata = listing?.slice(startIndex, endIndex);
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: 'flex items-center sm:justify-end gap-4\n      xsm:justify-center\n      ', children: _jsxs("div", { className: 'flex gap-2 items-center', children: [_jsx(FaChevronRight, { className: 'rotate-180 p-3 h-10 w-10 rounded-md  bg-[#212121] border cursor-pointer border-[#424242] ', onClick: () => setCurrentPage((p) => Math.max(p - 1, 1)) }), _jsxs("p", { className: '', children: [currentPage, "-", totalPages, " "] }), _jsx(FaChevronRight, { className: 'p-3 rounded-md h-10 w-10 bg-[#212121] border cursor-pointer border-[#424242] ', onClick: () => setCurrentPage((p) => Math.min(p + 1, totalPages)) })] }) }), _jsx("div", { children: _jsx(LeaveHistoryTable1, { newAllUserTabledata: newAllUserTabledata }) })] }));
}
