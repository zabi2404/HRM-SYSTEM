import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
export default function CredentialSubmenu(props) {
    const Icon = props.icon;
    return (_jsxs("li", { className: `flex gap-2 items-center cursor-pointer rounded-[7px] p-4 pr-8 w-full ${props.activeLink === props.title ? 'bg-[#0A1330] text-white' : ''}`, children: [_jsx(Icon, {}), _jsx(Link, { onClick: () => props.setActiveLink(props.title), className: 'text-nowrap', to: props.to, children: props.title })] }));
}
