import { AddNewReq } from '@/Components/Employee/Leave/AddNewReq'
import { SelectDemo } from '@/Components/LeaveSelectType'
import React, { useState } from 'react'

export default function PayrollTitle() {
  
  
  return (
   <>
    <div className='flex items-center justify-between p-4'>
             <div>
               <h1 className='text-2xl font-semibold'>Your Payroll</h1>
               <p className='text-[14px] opacity-50'>View all your Payroll </p>
             </div>
           </div>
   </>
  )
}
