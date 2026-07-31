import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "../Common/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "../Common/ui/dialog";
import axios from "axios";
import { toast } from "sonner";
import { Badge } from '@/Components/Common/badge';
import { useDispatch } from "react-redux";
import { Start, Success } from '../../Redux/user/loadingErrorSlice';
export function AppRejButton({ LeaveId }) {
    const dispatch = useDispatch();
    const Approved = () => {
        dispatch(Start());
        axios.post(`/api/leave/update-leave/${LeaveId}`, { status: "approved" })
            .then((Response) => {
            toast.success('Leave Marked as Approved');
            dispatch(Success());
        })
            .catch((err) => {
            toast.error('Something went wrong');
            dispatch(Success());
        });
    };
    const Rejected = () => {
        console.log("Rejected");
        axios.post(`/api/leave/update-leave/${LeaveId}`, { status: "rejected" })
            .then((Response) => {
            toast.success('Leave Marked as Rejected');
        })
            .catch((err) => toast.error('Something went wrong'));
    };
    return (_jsx(Dialog, { children: _jsxs("form", { children: [_jsx(DialogTrigger, { asChild: true, children: _jsx("div", { className: "hover:bg-[#212121] cursor-pointer w-8 h-8  rounded-full", children: _jsx(Badge, { className: " px-4 py-2 ", children: 'pending' }) }) }), _jsxs(DialogContent, { className: "sm:max-w-[425px]", children: [_jsxs(DialogHeader, { children: [_jsx(DialogTitle, { className: "flex justify-center", children: "Leave Approval" }), _jsx(DialogDescription, { className: "flex flex-col items-center gap-2", children: "After Approval it can't be reverted" })] }), _jsxs(DialogFooter, { className: "flex xsm:!justify-center ", children: [_jsx(DialogClose, { asChild: true, children: _jsx(Button, { onClick: Rejected, variant: "outline", className: "cursor-pointer min-w-[100px]", children: "Reject" }) }), _jsx(DialogClose, { asChild: true, children: _jsx(Button, { onClick: Approved, className: "cursor-pointer hover:opacity-70", children: "Approved" }) })] })] })] }) }));
}
