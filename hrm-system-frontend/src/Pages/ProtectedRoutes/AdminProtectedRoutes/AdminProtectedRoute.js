import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
export default function AdminProtectedRoute() {
    const currentUser = useSelector((state) => state.user.currentUser);
    if (!currentUser) {
        return _jsx(Navigate, { to: "/login", replace: true });
    }
    else {
        return (_jsx(_Fragment, { children: currentUser.rest.role === 'admin' ?
                _jsx(Outlet, {})
                :
                    _jsx(Navigate, { to: "/login", replace: true }) }));
    }
}
