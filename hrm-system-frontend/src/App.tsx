// REACT
import { lazy, Suspense } from 'react';
import ReactDOM from "react-dom/client";
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
import { Toaster } from "@/Components/Common/ui/sonner"
import { useEffect, useRef, useState } from "react";
import { FiSidebar } from "react-icons/fi";
import { useSelector } from "react-redux";
import { LoadingSpinner } from './Components/Common/loading/Loading';
import EMPProfile from './Pages/ProtectedRoutes/EmployeesProtectedRoutes/EMPProfile';




function App() {

  const user = useSelector((state: any) => state.user.currentUser)
  const [isopen, setIsOpen] = useState(true);
  const sidebarRef = useRef(null);
  const buttonRef = useRef(null);

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
      if (
        isopen &&
        window.innerWidth < 850 &&
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isopen]);

  const Hide = !user;


  return (
    <>
      <Suspense fallback={<LoadingSpinner/>}>
        <BrowserRouter>

          <Toaster
            theme="dark" />
          <div className="flex">
            {/* SIDEBAR */}

            {!Hide &&

              <div ref={sidebarRef}
                className={`fixed top-0 h-screen left-0 bg-[#0A0A0A]  z-40 shadow-xl min-h-screen transform transition-transform duration-1000 ease-in-out py-8 pl-7 pr-10 w-[344px]  ${isopen ? '  translate-x-0' : '  -translate-x-[344px] '}
          max-[768px]:z-10 
          `}>
                 <Sidebar setIsOpen={setIsOpen} />
              </div>

            }

            {/* SIDEBAR OPEN CLOSE BUTTON */}

            {!Hide &&
              <div ref={buttonRef}
                className={`rounded-md flex items-center justify-center  bg-[#212121] border cursor-pointer border-[#424242] p-2 h-[40px] w-[40px]  shadow-lg  fixed  z-50 transform transition-all ease-in-out duration-1000 
    ${isopen ? ' xsm:left-[265px] xsm:top-[30px] min-[1000px]:left-[310px] ' : 'xsm:top-[30px] left-2'}  max-[767px]:z-50`}
                onClick={() => setIsOpen((prev) => !prev)}
              >
                <FiSidebar

                  className={` text-white cursor-pointer  ${isopen ? 'rotate-180' : ''}`}
                />

                {/* close side bar icons */}
                {/* {!isopen && (
                <CloseSIdeBar
                  className={`transform transition-all opacity-100 duration-1000`}
                  isopen={isopen}
                  setIsOpen={setIsOpen}
                />
              )} */}
              </div>}


            {/* MAIN CONTENT */}
            <div
              className={`transition-all duration-1000 ease-in-out  md:p-6 overflow-y-auto w-full xsm:mt-8 md:mt-0 sm:pl-0 ${isopen && !Hide ? ' min-[850px]:pl-[344px] ' : 'pl-[10]'} xsm:pl-2 xsm:pr-2 md:pl-8 md:pr-8
            xsm:p-1 
            `}
            >

              {/* NAVBAR */}
              {!Hide && <div>
                <Navbar
                  setIsOpen={setIsOpen}
                  isopen={isopen}
                />
              </div>}

              {/* MAIN CONTENT */}
              <div className="mt-10">

                <Routes>

                  {/* PUBLIC ROUTES */}
                  <Route path="/login" element={<Login />} />

                  {/* ROUTES THAT ONLY HR CAN ACCESS */}
                  <Route element={<HRProtectedRoute />} >
                    <Route path="/announcement" element={<Anouncment />} />
                    <Route path="/employee" element={<Employee />} />
                    <Route path="/employee-directory" element={<Directory />} />
                    <Route path="/employee-leave" element={<EmployeeLeave />} />
                    <Route path="/employee-attendance" element={<EmployeeAttendance />} />
                    <Route path="/employee-payroll" element={<EmployeePayroll />} />



                  </Route >


                  {/* ROUTES THAT ONLY ADMIN CAN ACCESS */}
                  <Route element={<AdminProtectedRoute />} >
                    <Route path="/Companyprofile" element={<CompanyProfile />} />
                    <Route path="/signup" element={<SignUp />} />

                  </Route >

                  {/* ROUTES THAT  CAN ACCESS  WITH VERFIED LOGIN AND TOKEN*/}
                  <Route element={<EmployeeProtectedRoute />} >
                  <Route path="/" element={<Navigate to="/dashboard" replace />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/attendance" element={<Attendance />} />
                    <Route path="/leave" element={<Leave />} />
                    <Route path="/message" element={<Message />} />
                    <Route path="/payroll" element={<Payroll />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/profile/:id" element={<EMPProfile />} />
                    <Route path="/detail-payroll/:id" element={<DetailPayroll />} />
                  </Route >
                </Routes>
              </div>

            </div>

          </div>



        </BrowserRouter>
      </Suspense>
    </>
  )
}

export default App


