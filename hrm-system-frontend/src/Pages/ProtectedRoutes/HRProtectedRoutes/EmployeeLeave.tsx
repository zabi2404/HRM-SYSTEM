import SearchInput from '@/Components/Common/Navbar/Input'
import EmployeeLeaveHistoryTable from '@/Sections/EmployeeLeave/EmployeeLeaveHistoryTable'
import EmployeeLeaveHistoryTitle from '@/Sections/EmployeeLeave/EmployeeLeaveHistoryTitle'
import EmployeeLeaveTable from '@/Sections/EmployeeLeave/EmployeeLeaveTable'
import EmployeeLeaveTitle from '@/Sections/EmployeeLeave/EmployeeLeaveTitle'
import LeaveHistoryTable from '@/Sections/Leave/LeaveHistoryTable'
import LeaveHistoryTitle from '@/Sections/Leave/LeaveHistoryTitle'
import React, { useState } from 'react'

export default function EmployeeLeave() {
      const [type,setType]=useState('');
      
    return (
        <>
            <div className='bg-[#2B2B2B] p-4 flex flex-col gap-8 rounded-2xl'>
                <EmployeeLeaveTitle 
                  onChange={(val)=>{
                    setType(val)
                   }}
                />
                <SearchInput
                    placeholder="Search name or Emplpoyee Id" />
                <EmployeeLeaveTable 
                type={type}
                
                />
            </div>

            <div className='bg-[#2B2B2B] p-4 flex flex-col gap-8 rounded-2xl mt-4'>
                <EmployeeLeaveHistoryTitle />
                <SearchInput
                    placeholder="Search name or Emplpoyee Id" />
                <EmployeeLeaveHistoryTable
                 type={type}
                
                />
            </div>

        </>
    )
}
