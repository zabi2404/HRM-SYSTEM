import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'


export default function AdminProtectedRoute() {
  

  const  currentUser  = useSelector((state: any) => state.user.currentUser)

   if(!currentUser){return <Navigate to="/login" replace />}
else{
  return (
    <>
    {
      currentUser.rest.role === 'admin' ?
        <Outlet />
        :
        <Navigate to="/login" replace />
    }
  </>
  )
}
  

}
