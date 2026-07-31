import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import QuestionList from '@/Sections/Detailpayroll/QuestionList';
import AnnoucmentTitle from '@/Sections/Annoucment/AnnoucmentTitle';
// redux
import { useSelector } from 'react-redux';
export default function Anouncment() {
    const messageObject = useSelector((state) => state.Message.messageObject);
    console.log(messageObject);
    return (_jsxs(_Fragment, { children: [_jsx(AnnoucmentTitle, {}), _jsx("div", { children: _jsx("ul", { children: messageObject.map((item) => {
                        return (_jsx(QuestionList, { id: item._id, title: item.title, messageObject: messageObject }, item._id));
                    }) }) })] }));
}
