import { jsx as _jsx } from "react/jsx-runtime";
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function EmployeeProtectedRoute() {
    const user = useSelector((state) => state.user.currentUser);
    return (user ? _jsx(Outlet, {}) : _jsx(Navigate, { to: "/login", replace: true }));
}
