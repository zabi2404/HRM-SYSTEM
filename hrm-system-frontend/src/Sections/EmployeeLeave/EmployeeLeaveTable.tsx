import { FaChevronRight, FaPlus } from "react-icons/fa6";
import EmployeeTable from '@/Sections/Employee/EmployeeTable';
import { AllUserTabledata } from '../../../public/Data'
import { useEffect, useState } from "react";
import Table1 from "../Leave/Table1";
import EmployeeLeaveTable1 from "./EmployeeLeaveTable1";
import { useSelector } from "react-redux";
import axios from "axios";

type EmployeeLeaveTableProps={
type:string
}


export default function EmployeeLeaveTable({type}:EmployeeLeaveTableProps) {
console.log("from table", type)
  const User = useSelector((state: any) => state.user.currentUser)
  const [listing, setListing] = useState();


  useEffect(() => {

    axios.get(`/api/leave/get-Appliedleaves?type=${type||undefined}&status=pending`)
      .then((Response) => {
        const data = Response.data;
        setListing(data)
        console.log(data)
      }
      )

      .catch((err) => console.log(err))
  }, [type]);

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
        <EmployeeLeaveTable1
          newAllUserTabledata={newAllUserTabledata}
          fallback="No Leave Request"
        />
      </div>
    
    
    </>
  )
}
