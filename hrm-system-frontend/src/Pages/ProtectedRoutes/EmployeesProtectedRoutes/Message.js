import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import QuestionList from '@/Sections/Detailpayroll/QuestionList';
// redux
import { useSelector } from 'react-redux';
export default function Message() {
    const messageObject = useSelector((state) => state.Message.messageObject);
    return (_jsxs(_Fragment, { children: [_jsx("div", { children: _jsx("h1", { className: 'text-2xl font-semibold mb-4', children: "Messages" }) }), _jsx("div", { children: _jsx("ul", { children: messageObject.map((item) => {
                        return (_jsx(QuestionList, { id: item._id, title: item.title, messageObject: messageObject }, item._id));
                    }) }) })] }));
}
