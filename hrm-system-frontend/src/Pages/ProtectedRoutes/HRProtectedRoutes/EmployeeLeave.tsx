import SearchInput from '@/Components/Common/Navbar/Input'
import EmployeeLeaveHistoryTable from '@/Sections/EmployeeLeave/EmployeeLeaveHistoryTable'
import EmployeeLeaveHistoryTitle from '@/Sections/EmployeeLeave/EmployeeLeaveHistoryTitle'
import EmployeeLeaveTable from '@/Sections/EmployeeLeave/EmployeeLeaveTable'
import EmployeeLeaveTitle from '@/Sections/EmployeeLeave/EmployeeLeaveTitle'
import LeaveHistoryTable from '@/Sections/Leave/LeaveHistoryTable'
import LeaveHistoryTitle from '@/Sections/Leave/LeaveHistoryTitle'
import React from 'react'

export default function EmployeeLeave() {
    return (
        <>
            <div className='bg-[#2B2B2B] p-4 flex flex-col gap-8 rounded-2xl'>
                <EmployeeLeaveTitle />
                <SearchInput
                    placeholder="Search name or Emplpoyee Id" />
                <EmployeeLeaveTable />
            </div>

            <div className='bg-[#2B2B2B] p-4 flex flex-col gap-8 rounded-2xl mt-4'>
                <EmployeeLeaveHistoryTitle />
                <SearchInput
                    placeholder="Search name or Emplpoyee Id" />
                <EmployeeLeaveHistoryTable />
            </div>

        </>
    )
}
