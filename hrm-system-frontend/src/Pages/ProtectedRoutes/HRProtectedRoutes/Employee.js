import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { FaChevronRight } from "react-icons/fa6";
import SearchInput from '@/Components/Common/Navbar/Input';
import EmployeeTable from '@/Sections/Employee/EmployeeTable';
import ManageYourEmplopyee from '@/Sections/Employee/ManageYourEmplopyee';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function Employee() {
    const location = useLocation();
    const [listing, setListing] = useState([]);
    const { loading } = useSelector((state) => state.loadingError);
    const urlParams = new URLSearchParams(location.search);
    const searchTerm = urlParams.get("searchTerm");
    useEffect(() => {
        axios.get(`/api/employee/getEmployees?searchTerm=${searchTerm || ''}`)
            .then((response) => {
            const data = response.data;
            setListing(data);
            console.log(data);
        })
            .catch((err) => {
            console.log(err);
        });
    }, [searchTerm, loading]);
    // axios.get('/api/employee/getEmployees')
    // ?searchTerm=1003
    // PAGINATION
    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 10;
    const startIndex = (currentPage - 1) * 10;
    const endIndex = startIndex + itemPerPage;
    const totalPages = Math.ceil(listing?.length / itemPerPage);
    const newAllUserTabledata = listing.slice(startIndex, endIndex);
    return (_jsx(_Fragment, { children: _jsxs("div", { className: 'bg-[#2B2B2B] px-4 flex flex-col gap-8 rounded-2xl', children: [_jsx(ManageYourEmplopyee, {}), _jsx(SearchInput, {}), _jsxs("div", { className: 'flex items-center justify-between gap-4\n        xsm:flex-col\n        min-[500px]:flex-row\n        ', children: [_jsx("div", { className: 'flex items-center gap-4\n      \n          ' }), _jsxs("div", { className: 'flex gap-2 items-center', children: [_jsx(FaChevronRight, { className: 'rotate-180 p-3 h-10 w-10 rounded-md  bg-[#212121] border cursor-pointer border-[#424242] ', onClick: () => setCurrentPage((p) => Math.max(p - 1, 1)) }), _jsxs("p", { className: '', children: [currentPage, "-", totalPages, " "] }), _jsx(FaChevronRight, { className: 'p-3 rounded-md h-10 w-10 bg-[#212121] border cursor-pointer border-[#424242] ', onClick: () => setCurrentPage((p) => Math.min(p + 1, totalPages)) })] })] }), _jsx(EmployeeTable, { newAllUserTabledata: newAllUserTabledata })] }) }));
}
