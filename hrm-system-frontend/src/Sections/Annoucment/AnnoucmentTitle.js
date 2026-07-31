import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { AddNewMessage } from './AddNewMessage';
export default function AnnoucmentTitle() {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: 'flex justify-between\n   xsm:mt-20 md:mt-4\n   ', children: [_jsx("h1", { className: 'text-2xl font-semibold mb-8', children: "Messages" }), _jsx(AddNewMessage, {})] }) }));
}
