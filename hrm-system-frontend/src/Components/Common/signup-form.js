import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "@/lib/utils";
import { Button } from "@/Components/Common/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/Components/Common/ui/card";
import { Input } from "@/Components/Common/ui/input";
import { Label } from "@/Components/Common/ui/label";
import { RadioGroup, RadioGroupItem } from "@/Components/Common/ui/radio-group";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// redux
import { useDispatch, useSelector } from "react-redux";
import { Start, Success, failure } from '../../Redux/user/loadingErrorSlice';
import { toast } from "sonner";
export function LoginForm({ className, ...props }) {
    const [formData, setformData] = useState({
        username: '',
        email: '',
        password: '',
        role: 'employee'
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.loadingError);
    const HandleChanges = (e) => {
        if (typeof e === "string") {
            // RadioGroup
            setformData((prev) => ({ ...prev, role: e }));
        }
        else {
            // Normal inputs
            const { id, value } = e.target;
            setformData((prev) => ({ ...prev, [id]: value }));
        }
    };
    const formSubbmission = (e) => {
        e.preventDefault();
        dispatch(Start());
        axios.post("/api/auth/signup", formData)
            .then((response) => {
            console.log(response.data);
            dispatch(Success());
            toast.success("User Created Successfully");
            navigate('/employee');
        })
            .catch((error) => {
            if (error.response) {
                dispatch(failure(error.response?.data?.message || error.message));
                toast.error("failed", {
                    description: error || 'internal error',
                });
            }
            console.log(error);
        });
    };
    return (_jsx("div", { className: cn("flex flex-col gap-6", className), ...props, children: _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Create a new User" }), _jsx(CardDescription, { children: "Fill the below fields to create user" })] }), _jsx(CardContent, { children: _jsx("form", { onSubmit: formSubbmission, children: _jsxs("div", { className: "flex flex-col gap-6", children: [_jsxs("div", { className: "grid gap-3", children: [_jsx(Label, { htmlFor: "Username", children: "Username" }), _jsx(Input, { id: "username", type: "username", placeholder: "username", value: formData.username, required: true, onChange: HandleChanges })] }), _jsxs("div", { className: "grid gap-3", children: [_jsx(Label, { htmlFor: "email", children: "Email" }), _jsx(Input, { id: "email", type: "email", placeholder: "m@example.com", required: true, value: formData.email, onChange: HandleChanges })] }), _jsxs("div", { className: "grid gap-3", children: [_jsx("div", { className: "flex items-center", children: _jsx(Label, { htmlFor: "password", children: "Password" }) }), _jsx(Input, { id: "password", type: "password", required: true, value: formData.password, onChange: HandleChanges })] }), _jsx("div", { className: "flex justify-center items-center", children: _jsxs(RadioGroup, { value: formData.role, onValueChange: HandleChanges, className: "flex items-center", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(RadioGroupItem, { className: "cursor-pointer", value: "employee", id: "r1" }), _jsx(Label, { htmlFor: "r1", children: "Employee" })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(RadioGroupItem, { className: "cursor-pointer", value: "hr", id: "r2" }), _jsx(Label, { htmlFor: "r2", children: "Hr" })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(RadioGroupItem, { className: "cursor-pointer", value: "admin", id: "r3" }), _jsx(Label, { htmlFor: "r3", children: "Admin" })] })] }) }), _jsx("div", { className: "flex flex-col gap-3", children: _jsx(Button, { type: "submit", className: "w-full cursor-pointer", children: "Create Account" }) })] }) }) })] }) }));
}
