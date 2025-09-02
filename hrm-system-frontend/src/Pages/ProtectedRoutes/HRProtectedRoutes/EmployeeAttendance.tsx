import SearchInput from '@/Components/Common/Navbar/Input'
import EmployeeAttendanceTable from '@/Sections/EmployeeAttendance.tsx/EmployeeAttendanceTable'
import EmployeeAttendanceTitle from '@/Sections/EmployeeAttendance.tsx/EmployeeAttendanceTitle'
import EmployeeLeaveTable from '@/Sections/EmployeeLeave/EmployeeLeaveTable'
import EmployeeLeaveTitle from '@/Sections/EmployeeLeave/EmployeeLeaveTitle'
import React from 'react'

export default function EmployeeAttendance() {
  return (
   <>
   
    <div className='bg-[#2B2B2B] p-4 flex flex-col gap-8 rounded-2xl'>
                   <EmployeeAttendanceTitle/>
                   <EmployeeAttendanceTable />
               </div>
   </>
  )
}
