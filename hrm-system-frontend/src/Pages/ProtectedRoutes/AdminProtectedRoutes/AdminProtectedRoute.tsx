import React from 'react'
import { useSelector, UseSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'


export default function AdminProtectedRoute() {
  

  const  currentUser  = useSelector((state: any) => state.user.currentUser)
  console.log(currentUser)
  return (
    <>
    {
      currentUser.role === 'admin' ?
        <Outlet />
        :
        <Navigate to="/login" replace />
    }
  </>
  )
}
