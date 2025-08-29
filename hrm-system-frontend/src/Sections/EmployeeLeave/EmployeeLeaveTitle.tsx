import { AddNewReq } from '@/Components/Employee/Leave/AddNewReq'
import { SelectDemo } from '@/Components/LeaveSelectType'
import React, { useState } from 'react'

type EmployeeLeaveTitleprops={
  onChange?: (val: string) => void; 
}

export default function EmployeeLeaveTitle({onChange}:EmployeeLeaveTitleprops) {
  


  const [type,setType]=useState('');
  console.log("from title",type)
  onChange(type)
  return (
   <>
    <div className='flex items-center justify-between p-4'>
             {/* Title */}
             <div>
               <h1 className='text-2xl font-semibold'>Emplopyees Leaves</h1>
               <p className='text-[14px] opacity-50'>Manage Emplopyees Leaves</p>
             </div>
   
             {/* BUTTONS */}
             <div className="flex items-center gap-4">
               <SelectDemo
               onChange={(val)=>{
                setType(val)
               }}
                               />
            
   
             </div>
   
   
           </div>
   </>
  )
}
