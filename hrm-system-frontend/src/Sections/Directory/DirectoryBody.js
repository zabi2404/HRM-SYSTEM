import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import DirectoryCard from '@/Components/Common/DirectoryCard';
import axios from 'axios';
export default function DirectoryBody() {
    const [cardListing, setCardListing] = useState();
    useEffect(() => {
        axios.get('/api/employee/getEmployees')
            .then((response) => {
            const data = response.data;
            setCardListing(data);
            console.log(data);
        })
            .catch((err) => {
            console.log(err);
        });
    }, []);
    console.log(cardListing);
    return (_jsx(_Fragment, { children: _jsx("div", { className: 'flex flex-wrap gap-10 justify-center', children: cardListing?.map((item) => _jsx(DirectoryCard, { contact_number: item.contact_number, username: item.user_Ref.username, email: item.user_Ref.email, job_title: item.job_title, id: item.user_Ref._id }, item._id)) }) }));
}
