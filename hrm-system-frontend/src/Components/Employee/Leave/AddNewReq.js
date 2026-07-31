import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-mobile";
import { Button } from "@/Components/Common/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, } from "@/Components/Common/ui/dialog";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger, } from "@/Components/Common/ui/drawer";
import { Input } from "@/Components/Common/ui/input";
import { Label } from "@/Components/Common/ui/label";
import { FaPlus } from "react-icons/fa6";
import axios from "axios";
// redux
import { useDispatch, useSelector } from "react-redux";
import { Start, Success } from '../../../Redux/user/loadingErrorSlice';
import { toast } from "sonner";
import { SelectDemo } from "../../LeaveSelectType";
import SelectDays from "@/Components/LeaveSelectDay";
import { Textarea } from "@/Components/Common/ui/textarea";
export function AddNewReq() {
    const [open, setOpen] = React.useState(false);
    const isDesktop = useMediaQuery("(min-width: 768px)");
    if (isDesktop) {
        return (_jsxs(Dialog, { open: open, onOpenChange: setOpen, children: [_jsx(DialogTrigger, { asChild: true, children: _jsxs(Button, { className: "flex gap-3 cursor-pointer\n          ", children: [_jsx(FaPlus, {}), " New Request "] }) }), _jsxs(DialogContent, { className: "sm:max-w-[800px]", children: [_jsxs(DialogHeader, { children: [_jsx(DialogTitle, { children: "Add New Request For Leave" }), _jsx(DialogDescription, { children: "Fill the following field to proceed leave request" })] }), _jsx(ProfileForm, {})] })] }));
    }
    return (_jsxs(Drawer, { open: open, onOpenChange: setOpen, children: [_jsx(DrawerTrigger, { asChild: true, children: _jsxs(Button, { variant: "outline", className: "flex gap-3 cursor-pointer", children: [_jsx(FaPlus, {}), "New Request"] }) }), _jsxs(DrawerContent, { children: [_jsxs(DrawerHeader, { className: "text-left", children: [_jsx(DrawerTitle, { children: "Add New Request For Leave" }), _jsx(DrawerDescription, { children: "Fill the following field to proceed leave request" })] }), _jsx(ProfileForm, { className: "px-4" }), _jsx(DrawerFooter, { className: "pt-2", children: _jsx(DrawerClose, { asChild: true, children: _jsx(Button, { variant: "outline", children: "Cancel" }) }) })] })] }));
}
function ProfileForm({ className }) {
    //redux
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.loadingError);
    // HANDLING FORM AND SUBBMISSION OF FORM
    const [formData, setFormData] = React.useState({
        leaveType: "",
        days: "single",
        from: "",
        to: "",
        description: "",
        file: null,
    });
    const User = useSelector((state) => state.user.currentUser);
    const handleForm = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
        console.log(formData);
    };
    const formSubbmission = (e) => {
        e.preventDefault();
        dispatch(Start());
        axios.post(`/api/leave/create-leave/${User.employeeId}`, formData)
            .then((response) => {
            const data = response.data;
            toast.success(data);
            dispatch(Success());
        })
            .catch((err) => {
            toast.error(err.response.data.message);
            dispatch(Success());
        });
    };
    return (_jsxs("form", { onSubmit: formSubbmission, className: cn("grid items-start gap-6", className), children: [_jsxs("div", { className: "flex gap-4 w-full", children: [_jsx(SelectDemo, { value: formData.leaveType, onChange: (val) => {
                            setFormData({
                                ...formData,
                                'leaveType': val
                            });
                        } }), _jsx(SelectDays, { value: formData.days, onChange: (val) => {
                            setFormData({
                                ...formData,
                                'days': val
                            });
                        } })] }), _jsxs("div", { className: "flex gap-4 w-full", children: [_jsxs("div", { className: "grid gap-3 w-full", children: [_jsx(Label, { htmlFor: "from", children: "From" }), _jsx(Input, { id: "from", type: "date", placeholder: "", className: "flex justify-center", onChange: handleForm })] }), formData.days === "multiple" && _jsxs("div", { className: "grid gap-3 w-full", children: [_jsx(Label, { htmlFor: "to", children: "To" }), _jsx(Input, { id: "to", type: "date", placeholder: "", className: "flex justify-center", onChange: handleForm })] })] }), _jsxs("div", { className: "grid gap-3 w-full", children: [_jsx(Label, { htmlFor: "Description", children: "Description " }), _jsx("div", { className: "max-h-[200px] overflow-auto customScroll", children: _jsx(Textarea, { placeholder: "Type your reason for leave.", id: "description", onChange: handleForm }) })] }), _jsxs("div", { className: "grid gap-3 ", children: [_jsx(Label, { htmlFor: "file", children: "Attachment" }), _jsx(Input, { id: "file", type: "file", onChange: handleForm, className: "flex justify-center" })] }), _jsx(DialogTrigger, { asChild: true, children: _jsx(Button, { type: "submit", className: "cursor-pointer hover:opacity-80", children: "Save changes" }) })] }));
}
