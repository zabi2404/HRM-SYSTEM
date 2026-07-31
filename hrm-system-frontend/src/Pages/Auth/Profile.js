import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { Suspense, useEffect, useState } from 'react';
const ProfileFirstSection = React.lazy(() => import('@/Sections/Auth/Profile/ProfileFirstSection'));
const ProfileSecondSection = React.lazy(() => import('@/Sections/Auth/Profile/ProfileSecondSection'));
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Loader2 } from 'lucide-react';
export default function Profile() {
    const user = useSelector((state) => state.user.currentUser);
    const [listing, setListing] = useState();
    const id = user.rest._id;
    useEffect(() => {
        axios.get(`/api/employee/getEmployee/${id}`)
            .then((response) => {
            console.log(response.data);
            const data = response.data;
            setListing(data);
        })
            .catch((err) => console.log(err));
    }, []);
    return (_jsx(_Fragment, { children: _jsx(Suspense, { fallback: _jsx(Loader2, {}), children: _jsxs("div", { className: 'grid md:grid-cols-[25%_75%] gap-4 \n            xsm:grid-rows-2 md:grid-rows-1\n            ', children: [_jsx(ProfileFirstSection, { name: listing?.user_Ref.username, job_title: listing?.job_title, email: listing?.user_Ref.email, contact_number: listing?.contact_number, department: listing?.department, employeeCode: listing?.employeeCode }), _jsx(ProfileSecondSection, {})] }) }) }));
}
