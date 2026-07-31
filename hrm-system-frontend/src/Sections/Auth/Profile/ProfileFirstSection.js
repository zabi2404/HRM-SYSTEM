import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import axios from 'axios';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { signOutUserSuccess } from '../../../Redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
export default function ProfileFirstSection({ name, job_title, email, contact_number, department, employeeCode }) {
    const dispatch = useDispatch();
    const User = useSelector((state) => state.user.currentUser);
    const param = useParams();
    const logout = () => {
        axios.get('/api/auth/logout')
            .then((response) => {
            console.log(response.data);
            dispatch(signOutUserSuccess());
        })
            .catch((error) => {
            console.log(error);
        });
    };
    return (_jsx(_Fragment, { children: _jsxs("div", { className: 'bg-[#212121] rounded-lg px-6 py-4 flex flex-col justify-between  ', children: [_jsxs("div", { className: ' text-center mx-auto ', children: [_jsx("div", { className: 'w-30 h-30 mx-auto mb-2', children: _jsx("img", { className: 'rounded-full object-cover', src: "../../../public/images/blank-profile-picture-973460_1280.webp", alt: "" }) }), _jsx("h1", { className: 'font-script text-2xl font-bold', children: name ? name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase() : "-" }), _jsx("p", { className: 'opacity-50', children: job_title ? job_title.slice(0, 1).toUpperCase() + job_title.slice(1).toLowerCase() : "-" }), _jsx("button", { className: 'bg-white px-6 py-2 my-6 text-black rounded-[8px] ', children: "Active" })] }), _jsxs("div", { className: 'flex flex-col  gap-6 border-t pt-4 border-[#424242]', children: [_jsxs("div", { className: 'flex items-center gap-2', children: [_jsx(IoIosMail, {}), _jsx("p", { children: email || '-' })] }), _jsxs("div", { className: 'flex items-center gap-2', children: [_jsx(FaPhoneAlt, { className: 'w-4 h-4' }), _jsx("p", { children: contact_number || '-' })] })] }), _jsxs("div", { className: 'flex flex-col gap-4 mt-4 border-t pt-4', children: [_jsxs("div", { children: [_jsx("h1", { className: 'text-[16px] font-semibold opacity-50', children: "Employee Id" }), _jsx("p", { children: employeeCode || '-' })] }), _jsxs("div", { children: [_jsx("h1", { className: 'text-[16px] font-semibold opacity-50', children: "Department" }), _jsx("p", { children: department || '-' })] }), _jsxs("div", { children: [_jsx("h1", { className: 'text-[16px] font-semibold opacity-50', children: "Line Manager" }), _jsx("p", { children: "-" })] })] }), !param.id &&
                    _jsx("div", { className: 'w-full flex justify-center mt-4', children: _jsx("button", { onClick: logout, className: 'text-center p-2 bg-white text-black w-full rounded-lg cursor-pointer hover:opacity-80', children: "LogOut" }) })] }) }));
}
