
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Navbar from "./Components/Common/Navbar/Navbar";
import Sidebar from "./Components/Common/sidebar/sidebar";
import Login from "./Pages/Auth/Login";
import SignUp from "./Pages/Auth/SignUp";
import HRProtectedRoute from "./Pages/ProtectedRoutes/HRProtectedRoutes/HRProtectedRoute";
import Attendance from "./Pages/ProtectedRoutes/EmployeesProtectedRoutes/Attendance";
import CompanyProfile from "./Pages/ProtectedRoutes/AdminProtectedRoutes/CompanyProfile";
import Anouncment from "./Pages/ProtectedRoutes/HRProtectedRoutes/Anouncment";
import EmployeeProtectedRoute from "./Pages/ProtectedRoutes/EmployeesProtectedRoutes/EmployeeProtectedRoute";
import AdminProtectedRoute from "./Pages/ProtectedRoutes/AdminProtectedRoutes/AdminProtectedRoute";
import { Toaster } from "@/Components/Common/ui/sonner"
import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { FiSidebar } from "react-icons/fi";
import Employee from "./Pages/ProtectedRoutes/HRProtectedRoutes/Employee";
import Directory from "./Pages/ProtectedRoutes/HRProtectedRoutes/Directory";
import Profile from "./Pages/Auth/Profile";
import Leave from "./Pages/ProtectedRoutes/EmployeesProtectedRoutes/Leave";
import Message from "./Pages/ProtectedRoutes/EmployeesProtectedRoutes/Message";
import EmployeeLeave from "./Pages/ProtectedRoutes/HRProtectedRoutes/EmployeeLeave";
import EmployeeAttendance from "./Pages/ProtectedRoutes/HRProtectedRoutes/EmployeeAttendance";
import Payroll from "./Pages/ProtectedRoutes/EmployeesProtectedRoutes/Payroll";
import EmployeePayroll from "./Pages/ProtectedRoutes/HRProtectedRoutes/EmployeePayroll";
import DetailPayroll from "./Pages/ProtectedRoutes/EmployeesProtectedRoutes/DetailPayroll";
import { useSelector } from "react-redux";




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
              <Sidebar />
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
            className={`transition-all duration-1000 ease-in-out  md:p-6 overflow-y-auto w-full  sm:pl-0 ${isopen && !Hide ? ' min-[850px]:pl-[344px] ' : 'pl-[10]'} xsm:pl-2 xsm:pr-2 md:pl-8 md:pr-8
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
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/attendance" element={<Attendance />} />
                  <Route path="/leave" element={<Leave />} />
                  <Route path="/message" element={<Message />} />
                  <Route path="/payroll" element={<Payroll />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/detail-payroll" element={<DetailPayroll />} />

                </Route >

              </Routes>
            </div>

          </div>

        </div>



      </BrowserRouter>
    </>
  )
}

export default App


