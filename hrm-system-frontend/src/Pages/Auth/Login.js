import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Loader2 } from "lucide-react";
import { Suspense, lazy } from "react";
const ImageSection = lazy(() => import("@/Sections/Auth/Login/ImageSection"));
const LoginTo = lazy(() => import("@/Sections/Auth/Login/LoginTo"));
export default function Login() {
    return (_jsx(Suspense, { fallback: _jsx(Loader2, {}), children: _jsxs("div", { className: "grid min-h-svh lg:grid-cols-2 p-4", children: [_jsx(LoginTo, {}), _jsx(ImageSection, {})] }) }));
}
