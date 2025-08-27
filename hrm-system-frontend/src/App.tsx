
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/sidebar/sidebar";
import Login from "./Pages/Auth/Login";
import SignUp from "./Pages/Auth/SignUp";
import HRProtectedRoute from "./Pages/ProtectedRoutes/HRProtectedRoutes/HRProtectedRoute";
import Attendance from "./Pages/ProtectedRoutes/EmployeesProtectedRoutes/Attendance";
import CompanyProfile from "./Pages/ProtectedRoutes/AdminProtectedRoutes/CompanyProfile";
import Anouncment from "./Pages/ProtectedRoutes/HRProtectedRoutes/Anouncment";
import EmployeeProtectedRoute from "./Pages/ProtectedRoutes/EmployeesProtectedRoutes/EmployeeProtectedRoute";
import AdminProtectedRoute from "./Pages/ProtectedRoutes/AdminProtectedRoutes/AdminProtectedRoute";
import { Toaster } from "@/components/ui/sonner"
import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { FiSidebar } from "react-icons/fi";




function App() {
  const [isopen, setIsOpen] = useState(true);


  const sidebarRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isopen &&
        window.innerWidth < 768 &&
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

  console.log(buttonRef);
  
  const Hide = false


  return (
    <>
      <BrowserRouter>

        <Toaster
          theme="dark" />



        <div className="flex">
          {/* SIDEBAR */}
          { !Hide&&

          <div  ref={sidebarRef} 
           className={`fixed top-0 h-screen left-0 bg-[#0A0A0A]  z-40 shadow-xl min-h-screen transform transition-transform duration-1000 ease-in-out py-8 pl-7 pr-10 w-[344px]  ${isopen ? '  translate-x-0' : '  -translate-x-[305px] '}
          max-[768px]:z-10 
          `}>
            <Sidebar />
          </div>

          }
          
          {/* SIDEBAR OPEN CLOSE BUTTON */}

          {!Hide&&
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
            className={`transition-all duration-1000 ease-in-out ml-4 md:p-6 overflow-y-auto w-full  max-[767px]:pl-0 ${isopen && !Hide ? ' md:pl-[344px] ' : 'pl-[39px]'} md:pl-10
            xsm:p-1 xsm:pl-8
            `}
          >
            
            {/* NAVBAR */}
         {!Hide &&  <div> 
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
              <Route path="/dashboard" element={<Dashboard />} />

              {/* ROUTES THAT ONLY HR CAN ACCESS */}
              <Route element={<HRProtectedRoute />} >
                <Route path="/anouncment" element={<Anouncment />} />
              
              </Route >


              {/* ROUTES THAT ONLY ADMIN CAN ACCESS */}
              <Route element={<AdminProtectedRoute />} >
                <Route path="/Companyprofile" element={<CompanyProfile />} />
                <Route path="/signup" element={<SignUp />} />

              </Route >

              {/* ROUTES THAT  CAN ACCESS  WITH VERFIED LOGIN AND TOKEN*/}
              <Route element={<EmployeeProtectedRoute />} >
                <Route path="/" element={<Dashboard />} />
                <Route path="/attendance" element={<Attendance />} />
                <Route path="/leave" element={<Attendance />} />
                <Route path="/message" element={<Attendance />} />
                <Route path="/payroll" element={<Attendance />} />
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


