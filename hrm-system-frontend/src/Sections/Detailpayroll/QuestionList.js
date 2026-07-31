"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { FaChevronDown } from "react-icons/fa";
import AnswerList from './AnswerList';
import { MessageDeleteButton } from './MessageDeleteButton';
import { useSelector } from 'react-redux';
const QuestionList = ({ id, title, messageObject }) => {
    const currentUser = useSelector((state) => state.user.currentUser);
    const [isOpen, setisOpen] = useState(false);
    const HandleMenuLink = () => {
        setisOpen(!isOpen);
    };
    return (_jsx(_Fragment, { children: _jsxs("li", { className: 'rounded-[8px]  p-5  border mb-6 ', children: [_jsxs("div", { className: 'flex justify-between items-center', children: [_jsx("h1", { className: ' font-bold mb-2', children: title }), _jsxs("div", { className: 'flex gap-4 items-center', children: [currentUser.rest.role === 'admin' || currentUser.rest.role === 'hr'
                                    &&
                                        _jsx(MessageDeleteButton, { MessageID: id }), _jsx(FaChevronDown, { onClick: HandleMenuLink, className: `cursor-pointer  ${isOpen && `rotate-180`}` })] })] }), isOpen &&
                    messageObject.filter(item => item._id === id).map(item => (_jsx(AnswerList, { title: item.message }, item._id)))] }) }));
};
export default QuestionList;
