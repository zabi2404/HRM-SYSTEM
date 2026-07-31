import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "@/lib/utils";
import { Button } from "@/Components/Common/ui/button";
import { Input } from "@/Components/Common/ui/input";
import { Label } from "@/Components/Common/ui/label";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "@/lib/api";
// redux
import { useDispatch, useSelector } from "react-redux";
import { signInSuccess } from '../../../Redux/user/userSlice';
import { Start, Success, failure } from '../../../Redux/user/loadingErrorSlice';
export function LoginForm({ className, ...props }) {
    // redux
    const { loading, error } = useSelector((state) => state.loadingError);
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // handling form data
    const [formData, setformData] = useState({});
    const HandleFormData = (e) => {
        setformData({
            ...formData,
            [e.target.type]: e.target.value
        });
        console.log(formData);
    };
    // subbmitting form data and calling api
    const FormSubbmission = (e) => {
        e.preventDefault();
        dispatch(Start());
        api.post('/auth/login', formData)
            .then((response) => {
            const data = response.data;
            console.log(data);
            dispatch(signInSuccess(data));
            dispatch(Success());
            navigate("/dashboard");
        })
            .catch((err) => {
            if (err.response) {
                dispatch(failure(err.response.data.message));
                toast.error("Login failed", {
                    description: err.response.data.message,
                });
            }
            dispatch(failure(err));
        });
        console.log("form subbmitted");
    };
    return (_jsxs("form", { onSubmit: FormSubbmission, className: cn("flex flex-col gap-6", className), ...props, children: [_jsxs("div", { className: "flex flex-col items-center gap-2 text-center", children: [_jsx("h1", { className: "text-2xl font-bold", children: "Login to your account" }), _jsx("p", { className: "text-muted-foreground text-sm text-balance", children: "Enter your email below to login to your account" })] }), _jsxs("div", { className: "grid gap-6", children: [_jsxs("div", { className: "grid gap-3", children: [_jsx(Label, { htmlFor: "email", children: "Email" }), _jsx(Input, { id: "email", type: "email", placeholder: "m@example.com", onChange: HandleFormData, required: true })] }), _jsxs("div", { className: "grid gap-3", children: [_jsxs("div", { className: "flex items-center", children: [_jsx(Label, { htmlFor: "password", children: "Password" }), _jsx("a", { href: "#", className: "ml-auto text-sm underline-offset-4 hover:underline", children: "Forgot your password?" })] }), _jsx(Input, { id: "password", type: "password", required: true, onChange: HandleFormData })] }), _jsx(Button, { disabled: loading, type: "submit", className: "w-full bg-white hover:opacity-80 text-black cursor-pointer disabled:opacity-80", children: loading ? "Loading..." : "Login" })] })] }));
}
