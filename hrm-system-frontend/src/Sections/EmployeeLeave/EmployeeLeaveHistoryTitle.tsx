import { SelectDemo } from '@/Components/LeaveSelectType'
import { SelectMonth } from '../Leave/SelectMonth'
import { useState } from 'react'
import { LeaveHistorySelectType } from '@/Components/LeaveHistorySelectType';

export default function EmployeeLeaveHistoryTitle({sethistoryType}:any) {
  const [type,setType]=useState("")
  sethistoryType(type);
  console.log("from history title",type)
  return (
   <>
    <div className='flex items-center justify-between p-4
     xsm:flex-col xsm:text-center xsm:gap-4 xsm:p-2
     sm:flex-row sm:text-start 
    '>
          
             <div>
               <h1 className='text-2xl font-semibold'>Employee Leaves History</h1>
               <p className='text-[14px] opacity-50'>View Employees previous Leaves record</p>
             </div>
   
             
             <div className="flex items-center gap-4">
               <LeaveHistorySelectType
                                  onChange={(val:string) => {
                                    setType(val)
                                  }}
                              />
                           </div>
   
   
           </div>
   </>
  )
}
