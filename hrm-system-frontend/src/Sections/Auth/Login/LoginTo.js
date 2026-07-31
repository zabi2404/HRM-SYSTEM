import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { LoginForm } from "@/Components/Common/ui/login-form";
import { GalleryVerticalEnd } from "lucide-react";
import { Link } from "react-router-dom";
export default function LoginTo() {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "flex flex-col gap-4 p-6 md:p-10", children: [_jsx("div", { className: "flex justify-center gap-2 md:justify-start", children: _jsxs(Link, { to: '/dashboard', className: "flex items-center gap-2 font-medium", children: [_jsx("div", { className: "bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md", children: _jsx(GalleryVerticalEnd, { className: "size-4" }) }), "HR Dashboard"] }) }), _jsx("div", { className: "flex flex-1 items-center justify-center", children: _jsx("div", { className: "w-full max-w-xs", children: _jsx(LoginForm, {}) }) })] }) }));
}
