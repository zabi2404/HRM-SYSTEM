
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Login from "./Pages/Auth/Login";
import SignUp from "./Pages/Auth/SignUp";
import HRProtectedRoute from "./Pages/ProtectedRoutes/HRProtectedRoutes/HRProtectedRoute";
import Attendance from "./Pages/ProtectedRoutes/EmployeesProtectedRoutes/Attendance";
import CompanyProfile from "./Pages/ProtectedRoutes/AdminProtectedRoutes/CompanyProfile";
import Anouncment from "./Pages/ProtectedRoutes/HRProtectedRoutes/Anouncment";
import EmployeeProtectedRoute from "./Pages/ProtectedRoutes/EmployeesProtectedRoutes/EmployeeProtectedRoute";
import AdminProtectedRoute from "./Pages/ProtectedRoutes/AdminProtectedRoutes/AdminProtectedRoute";

function App() {


  return (
    <>
      <BrowserRouter>

        {/* <Navbar /> */}

        {/* <Sidebar /> */}

        <Routes>

          {/* PUBLIC ROUTES */}
          <Route path="/login" element={<Login />} />

          {/* ROUTES THAT ONLY HR CAN ACCESS */}
          <Route element={<HRProtectedRoute />} >
            <Route path="/anouncment" element={<Anouncment />} />
          </Route >


          {/* ROUTES THAT ONLY ADMIN CAN ACCESS */}
          <Route element={<AdminProtectedRoute />} >
            <Route path="/Companyprofile" element={<CompanyProfile />} />
            <Route path="/signUp" element={<SignUp />} />

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
      </BrowserRouter>
    </>
  )
}

export default App


