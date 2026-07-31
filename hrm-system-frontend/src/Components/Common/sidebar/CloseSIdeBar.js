import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { RiHomeFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { PiCurrencyDollarSimpleBold } from "react-icons/pi";
import { PiPuzzlePieceFill } from "react-icons/pi";
import { useLocation } from 'react-router-dom';
import { IoSettings } from "react-icons/io5";
import { TbBrandWebflow } from "react-icons/tb";
export default function CloseSIdeBar(props) {
    const location = useLocation();
    const isActive = location.pathname.startsWith();
    console.log(isActive);
    return (_jsx(_Fragment, { children: _jsx("div", { className: 'fixed top-25 ', children: _jsxs("div", { className: 'flex flex-col  gap-13 ', children: [_jsx(Link, { onClick: () => { props.setIsOpen(true); }, to: "/dashboard", children: _jsx(RiHomeFill, { className: `${location.pathname === '/dashboard' || location.pathname === '/dashboard/all-pages' || location.pathname === '/dashboard/products' || location.pathname === '/dashboard/reports' ? 'text-[#CB3CFF]' : "white"}` }) }), _jsx(Link, { to: "/feature", children: _jsx(FaStar, { className: `${location.pathname === '/feature' ? 'text-[#CB3CFF]' : "white"}` }) }), _jsx(Link, { to: "/user", children: _jsx(FaUser, { className: `${location.pathname === '/user' ? 'text-[#CB3CFF]' : "white"}` }) }), _jsx(Link, { to: "/pricing", children: _jsx(PiCurrencyDollarSimpleBold, { className: `${location.pathname === '/pricing' ? 'text-[#CB3CFF]' : null}` }) }), _jsx(Link, { to: "/integration", children: _jsx(PiPuzzlePieceFill, { className: `${location.pathname === '/integration' ? 'text-[#CB3CFF]' : null}` }) }), _jsx(Link, { to: "/setting", children: _jsx(IoSettings, { className: `${location.pathname === '/setting' ? 'text-[#CB3CFF]' : null}` }) }), _jsx(Link, { to: "/template-pages", children: _jsx(TbBrandWebflow, { className: `${location.pathname === '/template-pages' ? 'text-[#CB3CFF]' : null}` }) })] }) }) }));
}
