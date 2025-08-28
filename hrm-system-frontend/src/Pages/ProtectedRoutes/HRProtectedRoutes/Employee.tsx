import React, { useState } from 'react'
import { FaChevronRight } from "react-icons/fa6";
import SearchInput from '@/Components/Common/Navbar/Input';
import { DropDownButton } from '@/Components/Common/DropDownButton';
import EmployeeTable from '@/Sections/Employee/EmployeeTable';
import { AllUserTabledata } from '../../../../public/Data'
import ManageYourEmplopyee from '@/Sections/Employee/ManageYourEmplopyee';

export default function Employee() {

  // PAGINATION

  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 10;

  const startIndex = (currentPage - 1) * 10
  const endIndex = startIndex + itemPerPage;
  const totalListData = AllUserTabledata.length
  const totalPages = Math.ceil(AllUserTabledata.length / itemPerPage)

  const newAllUserTabledata = AllUserTabledata.slice(startIndex, endIndex)


  return (
    <>
      <div className='bg-[#2B2B2B] px-4 flex flex-col gap-8 rounded-2xl'>
     
      {/* Title */}
      <ManageYourEmplopyee/>
        {/* filter */}
          <SearchInput />
        <div className='flex items-center justify-between gap-4'>
          <div className='flex items-center gap-4'>
            <DropDownButton
            />
            <DropDownButton
            />
          </div>
          <div className='flex gap-2 items-center'>
            <FaChevronRight className='rotate-180 p-3 h-10 w-10 rounded-md  bg-[#212121] border cursor-pointer border-[#424242] ' onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} />
            <p className=''>{startIndex}-{endIndex} of {totalListData}</p>
            <FaChevronRight className='p-3 rounded-md h-10 w-10 bg-[#212121] border cursor-pointer border-[#424242] ' onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))} />
          </div>
        </div>

        {/* Table     */}
          <EmployeeTable
            newAllUserTabledata={newAllUserTabledata}
          />
       
      </div>

    </>
  )
}
