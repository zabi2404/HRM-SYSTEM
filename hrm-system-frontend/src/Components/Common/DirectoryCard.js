import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
export default function DirectoryCard({ username, contact_number, email, job_title, id }) {
    let name = username.slice(0, 1).toUpperCase() + username.slice(1).toLowerCase();
    const [copied, setCopied] = useState(false);
    const handleCopy = (val) => {
        navigator.clipboard.writeText(val);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500); // reset after 1.5s
    };
    return (_jsx(_Fragment, { children: _jsxs("div", { className: 'bg-[#212121] flex flex-col text-center jusitfy-center items-center  gap-3 rounded-lg max-w-fit py-6 px-8\n  min-w-[300px]\n  ', children: [_jsxs("div", { className: 'flex flex-col jusitfy-center items-center gap-3 ', children: [_jsx("div", { className: "w-16 h-16  object-cover", children: _jsx("img", { src: "../../../public/images/blank-profile-picture-973460_1280.webp", className: 'rounded-full', alt: "" }) }), _jsxs("div", { className: ' flex flex-col jusitfy-center items-center ', children: [_jsx(Link, { to: `/profile/${id}`, children: _jsx("h1", { className: "text-2xl hover:underline", children: name }) }), _jsx("p", { children: job_title || '-' })] })] }), _jsxs("div", { className: 'flex flex-col jusitfy-center items-center gap-2 border-t pt-4 border-[#424242]', children: [copied && (_jsx("p", { className: "absolute -translate-y-5  bg-black text-white text-xs px-2 py-1 rounded", children: "Copied" })), _jsxs("div", { className: 'flex  items-center gap-2', children: [_jsx(IoIosMail, {}), _jsx("p", { className: 'cursor-pointer ', onClick: () => {
                                        handleCopy(email);
                                    }, children: email })] }), _jsxs("div", { className: 'flex items-center gap-2', children: [_jsx(FaPhoneAlt, { className: 'w-4 h-4' }), _jsx("p", { className: 'cursor-pointer ', onClick: () => {
                                        handleCopy(contact_number);
                                    }, children: contact_number })] })] })] }) }));
}
