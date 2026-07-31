import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { RiErrorWarningLine } from "react-icons/ri";
export default function InfoCard({ title, description, subTitle, description2, subTitle2 }) {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: 'bg-[#2B2B2B] flex flex-col gap-8 p-4 rounded-lg min-w-[250px] ', children: [_jsxs("div", { className: ' flex justify-between items-center ', children: [_jsx("h1", { children: title }), _jsx(RiErrorWarningLine, {})] }), _jsxs("div", { className: 'flex flex-col gap-2', children: [_jsxs("div", { className: 'flex justify-between', children: [subTitle &&
                                    _jsx("p", { children: subTitle }), _jsx("p", { className: "opacity-50", children: description })] }), subTitle2 && description2 &&
                            _jsxs("div", { className: 'flex justify-between', children: [_jsx("p", { children: subTitle2 }), _jsx("p", { className: "opacity-50", children: description2 })] })] })] }) }));
}
