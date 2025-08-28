import { AddNewReq } from '@/Components/Employee/Leave/AddNewReq'
import React from 'react'

export default function LeaveTitle() {
  return (
   <>
    <div className='flex items-center justify-between p-4
    xsm:flex-col xsm:gap-4 xsm:text-center
    sm:flex-row sm:text-start 
    '>
             {/* Title */}
             <div>
               <h1 className='text-2xl font-semibold'>Leaves</h1>
               <p className='text-[14px] opacity-50'>Manage your Leaves</p>
             </div>
   
             {/* BUTTONS */}
             <div className="flex items-center gap-4">
               <AddNewReq />
            
   
             </div>
   
   
           </div>
   </>
  )
}
