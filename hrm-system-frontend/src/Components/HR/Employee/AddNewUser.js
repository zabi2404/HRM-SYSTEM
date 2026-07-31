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
import { useNavigate } from "react-router-dom";
export function AddNewUser() {
    const [open, setOpen] = React.useState(false);
    const isDesktop = useMediaQuery("(min-width: 768px)");
    if (isDesktop) {
        return (_jsxs(Dialog, { open: open, onOpenChange: setOpen, children: [_jsx(DialogTrigger, { asChild: true, children: _jsxs(Button, { className: "flex gap-3 cursor-pointer\n          ", children: [_jsx(FaPlus, {}), " Add New"] }) }), _jsxs(DialogContent, { className: "sm:max-w-[800px]", children: [_jsxs(DialogHeader, { children: [_jsx(DialogTitle, { children: "Create New User" }), _jsx(DialogDescription, { children: "Fill the following field to create new user" })] }), _jsx(ProfileForm, {})] })] }));
    }
    return (_jsxs(Drawer, { open: open, onOpenChange: setOpen, children: [_jsx(DrawerTrigger, { asChild: true, children: _jsxs(Button, { variant: "outline", className: "flex gap-3 cursor-pointer", children: [_jsx(FaPlus, {}), " Add New"] }) }), _jsxs(DrawerContent, { children: [_jsxs(DrawerHeader, { className: "text-left", children: [_jsx(DrawerTitle, { children: "Create New User" }), _jsx(DrawerDescription, { children: "Fill the following field to create new user" })] }), _jsx(ProfileForm, { className: "px-4" }), _jsx(DrawerFooter, { className: "pt-2", children: _jsx(DrawerClose, { asChild: true, children: _jsx(Button, { variant: "outline", children: "Cancel" }) }) })] })] }));
}
function ProfileForm({ className }) {
    //redux
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.loadingError);
    // HANDLING FORM AND SUBBMISSION OF FORM
    const [formData, setFormData] = React.useState({});
    const navigate = useNavigate();
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
        axios.post('/api/employee/createEmployee', formData)
            .then((response) => {
            toast.success("User Created Successfully");
            dispatch(Success());
            const data = response.data;
            console.log(data);
            console.log(data.user_Ref._id);
            navigate(`/profile/${data._id}`);
        })
            .catch((error) => {
            toast.error(error.response.data.message);
            console.log(error);
        });
    };
    return (_jsxs("form", { onSubmit: formSubbmission, className: cn("grid items-start gap-6", className), children: [_jsxs("div", { className: "grid gap-3", children: [_jsx(Label, { htmlFor: "email", children: "Email" }), _jsx(Input, { type: "email", id: "email", placeholder: "@example.com", onChange: handleForm, required: true })] }), _jsxs("div", { className: "flex gap-4 w-full", children: [_jsxs("div", { className: "grid gap-3 w-full", children: [_jsx(Label, { htmlFor: "job_title", children: "Job title" }), _jsx(Input, { id: "job_title", placeholder: "Job title", onChange: handleForm, required: true })] }), _jsxs("div", { className: "grid gap-3 w-full", children: [_jsx(Label, { htmlFor: "department", children: "Department" }), _jsx(Input, { id: "department", placeholder: "Department", onChange: handleForm, required: true })] })] }), _jsxs("div", { className: "flex gap-4 w-full", children: [_jsxs("div", { className: "grid gap-3 w-full", children: [_jsx(Label, { htmlFor: "salery", children: "Salery" }), _jsx(Input, { id: "salery", type: "number", placeholder: "Salery in Pkr", onChange: handleForm, required: true })] }), _jsxs("div", { className: "grid gap-3 w-full ", children: [_jsx(Label, { htmlFor: "contact_Number", children: "Contact Number" }), _jsx(Input, { id: "contact_number", placeholder: "Contact Number", onChange: handleForm, type: "number", min: 11, required: true })] }), _jsxs("div", { className: "grid gap-3 w-full", children: [_jsx(Label, { htmlFor: "address", children: "Address" }), _jsx(Input, { id: "address", placeholder: "Address", onChange: handleForm, required: true })] })] }), _jsxs("div", { className: "flex gap-4 w-full", children: [_jsxs("div", { className: "grid gap-3 w-full", children: [_jsx(Label, { htmlFor: "joining_date", children: "Joining Date" }), _jsx(Input, { id: "joining_Date", type: "Date", className: "flex justify-center", onChange: handleForm })] }), _jsxs("div", { className: "grid gap-3 w-full", children: [_jsx(Label, { htmlFor: "emplopyee Code", children: "Emplopyee Code" }), _jsx(Input, { id: "emplopyee Code", defaultValue: "EMP010", disabled: true })] })] }), _jsx(Button, { type: "submit", className: "cursor-pointer hover:opacity-80", children: "Save changes" })] }));
}
