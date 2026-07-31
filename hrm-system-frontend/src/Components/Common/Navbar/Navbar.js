import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import Input from './Input'; //component
import { Link } from 'react-router-dom';
import { GalleryVerticalEnd } from 'lucide-react';
import { MessagePopOver } from '@/Pages/MessagePopOver';
export default function Navbar({ setIsOpen, isopen }) {
    const [popUp, setPopUp] = useState(false);
    return (_jsx(_Fragment, { children: _jsxs("div", { className: 'flex item-center   justify-between pr-10\n      max-[1000px]:hidden min-[1000px]:pl-7\n      ', children: [_jsx("div", { className: 'flex gap-4', children: _jsx("div", { className: "flex justify-center gap-2 md:justify-start", children: _jsxs(Link, { to: '/dashboard', className: "flex items-center gap-2 font-medium", children: [_jsx("div", { className: "bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md", children: _jsx(GalleryVerticalEnd, { className: "size-4" }) }), "HR Dashboard"] }) }) }), _jsxs("div", { className: 'flex items-center gap-4', children: [_jsx(Input, {}), _jsx(Link, { to: '', children: _jsx("p", { className: 'whitespace-nowrap', children: "About us" }) })] }), _jsxs("div", { className: 'flex items-center gap-6', children: [_jsx(MessagePopOver, {}), _jsx("div", { children: _jsx(Link, { to: '/profile', children: _jsx("img", { className: 'w-8 h-8', src: "/images/Default_pfp.svg.png", alt: "" }) }) })] })] }) }));
}
