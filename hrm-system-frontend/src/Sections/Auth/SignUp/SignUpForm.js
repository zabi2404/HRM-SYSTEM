import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { LoginForm } from "@/Components/Common/signup-form";
export default function SignUpForm() {
    return (_jsx(_Fragment, { children: _jsx("div", { className: "w-full max-w-sm", children: _jsx(LoginForm, {}) }) }));
}
