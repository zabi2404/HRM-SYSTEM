import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import SignUpForm from '@/Sections/Auth/SignUp/SignUpForm';
import SignUpUpperPart from '@/Sections/Auth/SignUp/SignUpUpperPart';
export default function SignUp() {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "flex flex-col gap-10  w-full items-center justify-center p-6 md:px-10 md:pt-0", children: [_jsx(SignUpUpperPart, {}), _jsx(SignUpForm, {})] }) }));
}
