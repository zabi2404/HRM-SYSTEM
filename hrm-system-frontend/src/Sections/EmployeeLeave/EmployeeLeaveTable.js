import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { FaChevronRight } from "react-icons/fa6";
import { useEffect, useState } from "react";
import EmployeeLeaveTable1 from "./EmployeeLeaveTable1";
import { useSelector } from "react-redux";
import axios from "axios";
import { useLocation } from "react-router-dom";
export default function EmployeeLeaveTable({ type }) {
    console.log("from table", type);
    const location = useLocation();
    const urlParams = new URLSearchParams(location.search);
    const searchTerm = urlParams.get("searchTerm");
    const User = useSelector((state) => state.user.currentUser);
    const [listing, setListing] = useState([]);
    const { loading } = useSelector((state) => state.loadingError);
    useEffect(() => {
        axios.get(`/api/leave/get-Appliedleaves?type=${type || undefined}&status=pending`)
            .then((Response) => {
            const data = Response.data;
            setListing(data);
            console.log(data);
        })
            .catch((err) => console.log(err));
    }, [type, loading]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 10;
    const startIndex = (currentPage - 1) * 10;
    const endIndex = startIndex + itemPerPage;
    const totalPages = Math.ceil(listing?.length / itemPerPage);
    const newAllUserTabledata = listing?.slice(startIndex, endIndex);
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: 'flex items-center justify-end gap-4\n       xsm:flex-col\n       min-[500px]:flex-row\n      ', children: _jsxs("div", { className: 'flex gap-2 items-center', children: [_jsx(FaChevronRight, { className: 'rotate-180 p-3 h-10 w-10 rounded-md  bg-[#212121] border cursor-pointer border-[#424242] ', onClick: () => setCurrentPage((p) => Math.max(p - 1, 1)) }), _jsxs("p", { className: '', children: [currentPage, "-", totalPages, " "] }), _jsx(FaChevronRight, { className: 'p-3 rounded-md h-10 w-10 bg-[#212121] border cursor-pointer border-[#424242] ', onClick: () => setCurrentPage((p) => Math.min(p + 1, totalPages)) })] }) }), _jsx("div", { children: _jsx(EmployeeLeaveTable1, { newAllUserTabledata: newAllUserTabledata, fallback: "No Leave Request" }) })] }));
}
