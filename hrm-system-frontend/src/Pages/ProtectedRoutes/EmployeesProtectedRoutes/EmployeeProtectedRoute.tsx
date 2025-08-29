import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector, UseSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
export default function EmployeeProtectedRoute() {
  const user = useSelector((state: any) => state.user.currentUser)

  return (

     user?<Outlet/>: <Navigate to="/login" replace />
   
  )
}
