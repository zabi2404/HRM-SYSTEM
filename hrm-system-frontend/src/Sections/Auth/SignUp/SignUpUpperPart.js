import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { GalleryVerticalEnd } from 'lucide-react';
import { Link } from 'react-router-dom';
export default function SignUpUpperPart() {
    return (_jsx(_Fragment, { children: _jsx("div", { className: "flex justify-center item-center ", children: _jsxs(Link, { to: '/dashboard', className: "flex items-center gap-2 font-medium", children: [_jsx("div", { className: "bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md", children: _jsx(GalleryVerticalEnd, { className: "size-4" }) }), "HR Dashboard"] }) }) }));
}
