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
import { Start, Success } from '../../Redux/user/loadingErrorSlice';
import { toast } from "sonner";
import { Textarea } from "@/Components/Common/ui/textarea";
import { useNavigate } from 'react-router-dom';
export function AddNewMessage() {
    const [open, setOpen] = React.useState(false);
    const isDesktop = useMediaQuery("(min-width: 768px)");
    if (isDesktop) {
        return (_jsxs(Dialog, { open: open, onOpenChange: setOpen, children: [_jsx(DialogTrigger, { asChild: true, children: _jsxs(Button, { className: "flex gap-3 cursor-pointer\n          ", children: [_jsx(FaPlus, {}), " Add New Message"] }) }), _jsxs(DialogContent, { className: "sm:max-w-[800px]", children: [_jsxs(DialogHeader, { children: [_jsx(DialogTitle, { children: "Create New Message" }), _jsx(DialogDescription, { children: "Fill the following field to create new Message" })] }), _jsx(ProfileForm, {})] })] }));
    }
    return (_jsxs(Drawer, { open: open, onOpenChange: setOpen, children: [_jsx(DrawerTrigger, { asChild: true, children: _jsxs(Button, { variant: "outline", className: "flex gap-3 cursor-pointer", children: [_jsx(FaPlus, {}), " Add New"] }) }), _jsxs(DrawerContent, { children: [_jsxs(DrawerHeader, { className: "text-left", children: [_jsx(DrawerTitle, { children: "Add New Message" }), _jsx(DrawerDescription, { children: "Fill the following field to create new Message" })] }), _jsx(ProfileForm, { className: "px-4" }), _jsx(DrawerFooter, { className: "pt-2", children: _jsx(DrawerClose, { asChild: true, children: _jsx(Button, { variant: "outline", className: "cursor-pointer", children: "Cancel" }) }) })] })] }));
}
function ProfileForm({ className }) {
    const naviagte = useNavigate();
    //redux
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.loadingError);
    // HANDLING FORM AND SUBBMISSION OF FORM
    const [formData, setFormData] = React.useState({});
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
        axios.post('/api/message/create-message', formData)
            .then((response) => {
            toast.success("Message Published Successfully");
            dispatch(Success());
        })
            .catch((error) => {
            console.log(error.response.data.message);
        });
    };
    return (_jsxs("form", { onSubmit: formSubbmission, className: cn("grid items-start gap-6", className), children: [_jsxs("div", { className: "grid gap-3", children: [_jsx(Label, { htmlFor: "text", children: "Title" }), _jsx(Input, { type: "text", id: "title", placeholder: "Enter Title", onChange: handleForm })] }), _jsx("div", { className: "grid gap-3", children: _jsxs("div", { className: "grid gap-3 w-full", children: [_jsx(Label, { htmlFor: "department", children: "Message" }), _jsx("div", { className: "max-h-[300px] overflow-auto customScroll", children: _jsx(Textarea, { placeholder: "Type your message here.", id: "message", onChange: handleForm }) })] }) }), _jsx(DialogTrigger, { asChild: true, children: _jsx(Button, { type: "submit", className: "cursor-pointer hover:opacity-80", children: "Publish" }) })] }));
}
