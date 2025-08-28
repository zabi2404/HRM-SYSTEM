import { FaChevronRight, FaPlus } from "react-icons/fa6";
import EmployeeTable from '@/Sections/Employee/EmployeeTable';
import { AllUserTabledata } from '../../../public/Data'
import { useState } from "react";
import Table1 from "../Leave/Table1";
import PayrollTable1 from "./PayrollTable1";
export default function PayrollTable() {

   const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 10;
  
    const startIndex = (currentPage - 1) * 10
    const endIndex = startIndex + itemPerPage;
    const totalListData = AllUserTabledata.length
    const totalPages = Math.ceil(AllUserTabledata.length / itemPerPage)
  
    const newAllUserTabledata = AllUserTabledata.slice(startIndex, endIndex)
  

  return (
    <>
      <div className='flex items-center justify-end gap-4'>
        

        <div className='flex gap-2 items-center'>
          <FaChevronRight className='rotate-180 p-3 h-10 w-10 rounded-md  bg-[#212121] border cursor-pointer border-[#424242] ' onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} />

          <p className=''>{startIndex}-{endIndex} of {totalListData}</p>
          <FaChevronRight className='p-3 rounded-md h-10 w-10 bg-[#212121] border cursor-pointer border-[#424242] ' onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))} />
        </div>
      </div>
      <div>
        <PayrollTable1
          newAllUserTabledata={newAllUserTabledata}
        />
      </div>
    
    
    </>
  )
}
