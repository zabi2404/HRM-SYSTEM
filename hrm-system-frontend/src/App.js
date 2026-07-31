import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// REACT
import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
//GLOBAL
import Dashboard from "./Pages/Dashboard";
const Sidebar = lazy(() => import("./Components/Common/sidebar/Sidebar"));
// ROUTES
const Navbar = lazy(() => import("./Components/Common/Navbar/Navbar"));
const Login = lazy(() => import("./Pages/Auth/Login"));
const SignUp = lazy(() => import("./Pages/Auth/SignUp"));
const HRProtectedRoute = lazy(() => import("./Pages/ProtectedRoutes/HRProtectedRoutes/HRProtectedRoute"));
const Attendance = lazy(() => import("./Pages/ProtectedRoutes/EmployeesProtectedRoutes/Attendance"));
const CompanyProfile = lazy(() => import("./Pages/ProtectedRoutes/AdminProtectedRoutes/CompanyProfile"));
const Anouncment = lazy(() => import("./Pages/ProtectedRoutes/HRProtectedRoutes/Anouncment"));
const EmployeeProtectedRoute = lazy(() => import("./Pages/ProtectedRoutes/EmployeesProtectedRoutes/EmployeeProtectedRoute"));
const AdminProtectedRoute = lazy(() => import("./Pages/ProtectedRoutes/AdminProtectedRoutes/AdminProtectedRoute"));
const Employee = lazy(() => import("./Pages/ProtectedRoutes/HRProtectedRoutes/Employee"));
const Directory = lazy(() => import("./Pages/ProtectedRoutes/HRProtectedRoutes/Directory"));
const Profile = lazy(() => import("./Pages/Auth/Profile"));
const Leave = lazy(() => import("./Pages/ProtectedRoutes/EmployeesProtectedRoutes/Leave"));
const Message = lazy(() => import("./Pages/ProtectedRoutes/EmployeesProtectedRoutes/Message"));
const EmployeeLeave = lazy(() => import("./Pages/ProtectedRoutes/HRProtectedRoutes/EmployeeLeave"));
const EmployeeAttendance = lazy(() => import("./Pages/ProtectedRoutes/HRProtectedRoutes/EmployeeAttendance"));
const Payroll = lazy(() => import("./Pages/ProtectedRoutes/EmployeesProtectedRoutes/Payroll"));
const EmployeePayroll = lazy(() => import("./Pages/ProtectedRoutes/HRProtectedRoutes/EmployeePayroll"));
const DetailPayroll = lazy(() => import("./Pages/ProtectedRoutes/EmployeesProtectedRoutes/DetailPayroll"));
// OTHER
import { Toaster } from "@/Components/Common/ui/sonner";
import { useEffect, useRef, useState } from "react";
import { FiSidebar } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { LoadingSpinner } from './Components/Common/loading/Loading';
import EMPProfile from './Pages/ProtectedRoutes/EmployeesProtectedRoutes/EMPProfile';
import { signOutUserSuccess } from './Redux/user/userSlice';
import { SessionConfirmButton } from './Components/SessionConfirmButton';
import SessionHandler from './Components/sessionHandler';
function App() {
    const dispatch = useDispatch();
    const SESSION_TTL = 2 * 60 * 60 * 1000;
    const user = useSelector((state) => state.user.currentUser);
    const [isopen, setIsOpen] = useState(true);
    const sidebarRef = useRef(null);
    const buttonRef = useRef(null);
    useEffect(() => {
        const handleVisibilty = () => {
            if (document.hidden) {
                localStorage.setItem('expiryToken', Date.now().toString());
            }
            else {
                localStorage.getItem('expiryToken');
                const awayTimeStr = localStorage.getItem("awayTime");
                if (!awayTimeStr)
                    return;
                const awayTime = parseInt(awayTimeStr, 10);
                const timePassed = Date.now() - awayTime;
                if (timePassed >= SESSION_TTL) {
                    // More than 2 hours away → logout
                    dispatch(signOutUserSuccess());
                    localStorage.removeItem("awayTime");
                }
                else {
                    // Less than 2 hours → remove timer
                    localStorage.removeItem("awayTime");
                }
            }
        };
        document.addEventListener("visibilitychange", handleVisibilty);
        return () => document.removeEventListener("visibilitychange", handleVisibilty);
    }, [dispatch]);
    useEffect(() => {
        const handleResize = () => {
            setIsOpen(window.innerWidth >= 850);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (isopen &&
                window.innerWidth < 850 &&
                sidebarRef.current &&
                !sidebarRef.current.contains(e.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isopen]);
    const Hide = !user;
    return (_jsx(_Fragment, { children: _jsx(Suspense, { fallback: _jsx(LoadingSpinner, {}), children: _jsxs(BrowserRouter, { children: [user &&
                        _jsx(SessionConfirmButton, {}), _jsx(SessionHandler, {}), _jsx(Toaster, { theme: "dark" }), _jsxs("div", { className: "flex", children: [!Hide &&
                                _jsx("div", { ref: sidebarRef, className: `fixed top-0 h-screen left-0 bg-[#0A0A0A]  z-40 shadow-xl min-h-screen transform transition-transform duration-1000 ease-in-out py-8 pl-7 pr-10 w-[344px]  ${isopen ? '  translate-x-0' : '  -translate-x-[344px] '}
          max-[768px]:z-10 
          `, children: _jsx(Sidebar, { setIsOpen: setIsOpen }) }), !Hide &&
                                _jsx("div", { ref: buttonRef, className: `rounded-md flex items-center justify-center  bg-[#212121] border cursor-pointer border-[#424242] p-2 h-[40px] w-[40px]  shadow-lg  fixed  z-50 transform transition-all ease-in-out duration-1000 
    ${isopen ? ' xsm:left-[265px] xsm:top-[30px] min-[1000px]:left-[310px] ' : 'xsm:top-[30px] left-2'}  max-[767px]:z-50`, onClick: () => setIsOpen((prev) => !prev), children: _jsx(FiSidebar, { className: ` text-white cursor-pointer  ${isopen ? 'rotate-180' : ''}` }) }), _jsxs("div", { className: `transition-all duration-1000 ease-in-out  md:p-6 overflow-y-auto w-full xsm:mt-8 md:mt-0 sm:pl-0 ${isopen && !Hide ? ' min-[850px]:pl-[344px] ' : 'pl-[10]'} xsm:pl-2 xsm:pr-2 md:pl-8 md:pr-8
            xsm:p-1 
            `, children: [!Hide && _jsx("div", { children: _jsx(Navbar, { setIsOpen: setIsOpen, isopen: isopen }) }), _jsx("div", { className: "mt-10", children: _jsxs(Routes, { children: [_jsx(Route, { path: "/login", element: _jsx(Login, {}) }), _jsxs(Route, { element: _jsx(HRProtectedRoute, {}), children: [_jsx(Route, { path: "/announcement", element: _jsx(Anouncment, {}) }), _jsx(Route, { path: "/employee", element: _jsx(Employee, {}) }), _jsx(Route, { path: "/employee-directory", element: _jsx(Directory, {}) }), _jsx(Route, { path: "/employee-leave", element: _jsx(EmployeeLeave, {}) }), _jsx(Route, { path: "/employee-attendance", element: _jsx(EmployeeAttendance, {}) }), _jsx(Route, { path: "/employee-payroll", element: _jsx(EmployeePayroll, {}) })] }), _jsxs(Route, { element: _jsx(AdminProtectedRoute, {}), children: [_jsx(Route, { path: "/Companyprofile", element: _jsx(CompanyProfile, {}) }), _jsx(Route, { path: "/signup", element: _jsx(SignUp, {}) })] }), _jsxs(Route, { element: _jsx(EmployeeProtectedRoute, {}), children: [_jsx(Route, { path: "/", element: _jsx(Navigate, { to: "/dashboard", replace: true }) }), _jsx(Route, { path: "/dashboard", element: _jsx(Dashboard, {}) }), _jsx(Route, { path: "/attendance", element: _jsx(Attendance, {}) }), _jsx(Route, { path: "/leave", element: _jsx(Leave, {}) }), _jsx(Route, { path: "/message", element: _jsx(Message, {}) }), _jsx(Route, { path: "/payroll", element: _jsx(Payroll, {}) }), _jsx(Route, { path: "/profile", element: _jsx(Profile, {}) }), _jsx(Route, { path: "/profile/:id", element: _jsx(EMPProfile, {}) }), _jsx(Route, { path: "/detail-payroll/:id", element: _jsx(DetailPayroll, {}) })] })] }) })] })] })] }) }) }));
}
export default App;
