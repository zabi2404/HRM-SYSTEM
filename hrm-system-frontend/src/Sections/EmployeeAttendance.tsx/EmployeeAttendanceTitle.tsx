import { AddNewReq } from '@/Components/Employee/Leave/AddNewReq'
import { SelectDemo } from '@/Components/LeaveSelectType'
import React, { useState } from 'react'

export default function EmployeeAttendanceTitle() {
  
  const [type,setType]=useState('');
  console.log(type)
  return (
   <>
    <div className='flex items-center justify-between p-4
     xsm:flex-col xsm:text-center xsm:gap-4 xsm:p-2
     sm:flex-row sm:text-start 
    '>
             {/* Title */}
             <div>
               <h1 className='text-2xl font-semibold'>Emplopyees Attendance</h1>
               <p className='text-[14px] opacity-50'>View Emplopyees Attendance</p>
             </div>
   
             {/* BUTTONS */}
           
            
   
  
   
   
           </div>
   </>
  )
}
