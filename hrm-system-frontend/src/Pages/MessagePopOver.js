import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { LuMessageSquareText } from "react-icons/lu";
import { Popover, PopoverContent, PopoverTrigger, } from "@/Components/Common/ui/popover";
import { getMessage } from '@/Redux/Message/messageSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import axios from "axios";
export function MessagePopOver() {
    const dispatch = useDispatch();
    const messageObject = useSelector((state) => state.Message.messageObject);
    const { loading } = useSelector((state) => state.loadingError);
    useEffect(() => {
        axios.get('/api/message/get-messages')
            .then((response) => {
            console.log('server response : ', response.data);
            const data = response.data;
            dispatch(getMessage(data));
        })
            .catch((err) => {
            console.log(err);
        });
    }, [loading]);
    return (_jsxs(Popover, { children: [_jsx(PopoverTrigger, { asChild: true, children: _jsx(LuMessageSquareText, { className: 'w-5 h-5 cursor-pointer' }) }), _jsx(PopoverContent, { className: "w-80", children: _jsx("div", { className: "grid gap-4 max-h-[220px] overflow-auto customScroll", children: messageObject.map((item) => _jsxs("div", { className: "space-y-2 pb-4 border-b", children: [_jsx("h4", { className: "leading-none font-medium", children: item.title }), _jsx("p", { className: "text-muted-foreground text-smv truncate h-7 w-[200px]", children: item.message })] })) }) })] }));
}
