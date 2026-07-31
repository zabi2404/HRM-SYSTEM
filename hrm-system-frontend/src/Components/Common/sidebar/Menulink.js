import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa6";
import Dropdown from './Dropdown';
import { hrSubmenu, adminSubmenu } from '../../../../public/Data';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
export default function Menulink(props) {
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.user.currentUser);
    const array = currentUser?.rest.role === "admin"
        ? adminSubmenu
        : currentUser?.rest.role === "hr"
            ? hrSubmenu
            : [];
    const [activelink, setActiveLink] = useState(null);
    let Icon = props.icon;
    const location = useLocation();
    const isParentActive = location.pathname === props.to ||
        location.pathname.startsWith(`${props.to}/`);
    const matchedSubmenu = array.find(item => item.title === props.title);
    const handleClickLink = () => {
        if (props.activelink === props.title) {
            props.setActiveLink(null); // close if already open
            setActiveLink(null);
        }
        else {
            props.setActiveLink(props.title); // open this one
            setActiveLink(null);
        }
    };
    const isActive = props.activelink === props.title;
    return (_jsxs(_Fragment, { children: [_jsxs("li", { className: "flex items-center cursor-pointer py-4  first:mt-6 last:mb-6", onClick: handleClickLink, children: [Icon && _jsx(Icon, { className: `${isParentActive ? 'opacity-75' : null} inline-block w-5 h-5 mr-2` }), props.img && _jsx("img", { className: 'mr-4', src: `${props.img}`, alt: "profilepic" }), _jsxs(Link, { to: props.to, className: `${isParentActive ? 'opacity-75' : null} flex-1`, children: [props.name && _jsx("span", { className: 'text-white text-[14px] block', children: props.name }), props.title] }), matchedSubmenu &&
                        _jsx(FaChevronRight, { className: `transition-all duration-600 ease-in-out ml-auto ${isActive && `rotate-90`}`, onClick: (e) => {
                                e.stopPropagation(); // prevent parent li click
                                handleClickLink();
                            } })] }), currentUser.rest.role !== 'employee' &&
                array?.map((item, index) => item.title === props.title ? (_jsx("ul", { className: `
        ml-6 overflow-hidden transition-all duration-600 ease-in-out 
        ${isActive ? 'max-h-[500px] opacity-100 translate-y-0 ' : 'max-h-0 opacity-0 -translate-y-2'}
      `, children: item.items.map((sub, i) => (_jsx(Dropdown, { title: sub.name, to: sub.path, parentpath: props.to, activelink: activelink, setActiveLink: setActiveLink, setIsOpen: props.setIsOpen }, i))) }, index)) : null)] }));
}
