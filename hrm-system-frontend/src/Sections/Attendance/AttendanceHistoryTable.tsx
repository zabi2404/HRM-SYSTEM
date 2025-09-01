import { FaChevronRight, FaPlus } from "react-icons/fa6";
import EmployeeTable from '@/Sections/Employee/EmployeeTable';
import { AllUserTabledata } from '../../../public/Data'
import { useEffect, useState } from "react";
import AttendanceHistoryTable1 from "./AttendanceHistoryTable1";
import { useSelector } from "react-redux";
import axios from "axios";








export default function AttendanceHistoryTable() {

  const [listing , setListing] = useState();
const user = useSelector((state: any) => state.user.currentUser);

useEffect(() => {
  axios.get(`/api/attendance/get-attendance/${user.employeeId}`)
  .then((response)=>{
    console.log(response.data)
    const data = response.data;
    setListing(data)
  })
  .catch((error)=>{
    console.log(error)
  })
}, []);

   const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 10;
  
    const startIndex = (currentPage - 1) * 10
    const endIndex = startIndex + itemPerPage;
    const totalListData = listing?.length
    const totalPages = Math.ceil(listing?.length / itemPerPage)
  
    const newAllUserTabledata = listing?.slice(startIndex, endIndex)
  

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
        <AttendanceHistoryTable1
          newAllUserTabledata={newAllUserTabledata}
        />
      </div>
    
    
    </>
  )
}
