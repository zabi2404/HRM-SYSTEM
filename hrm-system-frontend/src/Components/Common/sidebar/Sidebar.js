import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Data from '../../../../public/Data.js';
import Menulink from './Menulink.js';
import { hrMenu, adminMenu } from '../../../../public/Data.js';
import { FaArrowRight } from "react-icons/fa6";
import Input from '../Navbar/Input.js';
import { useDispatch, useSelector } from 'react-redux';
import { GalleryVerticalEnd } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
export default function sidebar(props) {
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.user.currentUser);
    let array = [];
    if (currentUser?.rest.role === 'admin') {
        array = adminMenu;
    }
    if (currentUser?.rest.role === 'hr') {
        array = hrMenu;
    }
    if (currentUser?.rest.role === 'employee') {
        array = Data;
    }
    const [activelink, setActiveLink] = useState(null);
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    return (_jsx(_Fragment, { children: _jsxs("div", { className: 'h-full overflow-y-scroll customScroll pd-4 ', children: [_jsxs("div", { className: 'mb-4', children: [_jsx("div", { className: "flex  gap-2 justify-start mb-4 min-[1000px]:hidden", children: _jsxs(Link, { to: '/dashboard', className: "flex items-center gap-2 font-medium", children: [_jsx("div", { className: "bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md", children: _jsx(GalleryVerticalEnd, { className: "size-4" }) }), "HR Dashboard"] }) }), _jsx("div", { className: 'mb-8', children: _jsx(Input, {}) })] }), _jsxs("div", { className: '', children: [_jsx("ul", { className: ' text-[14px] font-[500] w-full ', children: array?.map((item, index) => (_jsx(Menulink, { title: item.title, icon: item.icon, to: item.to, activelink: activelink, setActiveLink: setActiveLink, setIsOpen: props.setIsOpen, setIsOpenMenu: setIsOpenMenu, isOpenMenu: isOpenMenu }, index))) }), _jsx("hr", { className: 'border-t-[#FFFFFF]' }), _jsx("div", { className: "bg-[#212121] min-[1000px]:hidden   border border-[#424242] flex items-center justify-center rounded-[4px] mt-4", children: _jsx(Link, { to: '/profile', children: _jsxs("button", { type: "submit", className: 'text-white h-[44px] cursor-pointer flex items-center justify-between ', children: ["Profile", _jsx(FaArrowRight, { className: 'ml-2' })] }) }) }), currentUser.rest.role === 'admin' &&
                            _jsx("div", { className: "bg-[#212121]  border border-[#424242] flex items-center justify-center rounded-[4px] mt-4", children: _jsx(Link, { to: '/signup', children: _jsxs("button", { type: "submit", className: 'text-white h-[44px] cursor-pointer flex items-center justify-between ', children: ["Create New User", _jsx(FaArrowRight, { className: 'ml-2' })] }) }) })] })] }) }));
}
