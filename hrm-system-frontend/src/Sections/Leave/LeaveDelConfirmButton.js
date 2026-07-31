import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MdDelete } from "react-icons/md";
import { Button } from "../../Components/Common/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "../../Components/Common/ui/dialog";
import axios from "axios";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { Start, Success } from '../../Redux/user/loadingErrorSlice';
export function LeaveDelConfirmButton({ LeaveId }) {
    const dispatch = useDispatch();
    const HandleSubmit = () => {
        console.log("Button Clicked");
        dispatch(Start());
        axios.delete(`/api/leave/delete-leave/${LeaveId}`)
            .then((Response) => {
            toast.success("Leave Deleted Successfully");
            dispatch(Success());
        })
            .catch((err) => {
            toast.error("Error in Deleting Leave");
            dispatch(Success());
        });
    };
    return (_jsx(Dialog, { children: _jsxs("form", { children: [_jsx(DialogTrigger, { asChild: true, children: _jsx("div", { className: "hover:bg-[#212121] cursor-pointer w-8 h-8 flex justify-center items-center rounded-full", children: _jsx(MdDelete, { className: "cursor-pointer " }) }) }), _jsxs(DialogContent, { className: "sm:max-w-[425px]", children: [_jsxs(DialogHeader, { children: [_jsx(DialogTitle, { className: "flex justify-center", children: "Confirm" }), _jsx(DialogDescription, { className: "flex flex-col items-center gap-2", children: "Are you sure you want to delete this Leave ?" })] }), _jsxs(DialogFooter, { className: "flex xsm:!justify-center ", children: [_jsx(DialogClose, { asChild: true, children: _jsx(Button, { variant: "outline", className: "cursor-pointer ", children: "Cancel" }) }), _jsx(DialogClose, { asChild: true, children: _jsx(Button, { onClick: HandleSubmit, className: "cursor-pointer hover:opacity-70", children: "Confirm" }) })] })] })] }) }));
}
