import { FaChevronRight } from "react-icons/fa6";
import { useEffect, useState } from "react";
import EmployeeLeaveTable1 from "./EmployeeLeaveTable1";
import { useSelector } from "react-redux";
import axios from "axios";
import { useLocation } from "react-router-dom";

type EmployeeLeaveTableProps={
type:string
}


export default function EmployeeLeaveTable({type}:EmployeeLeaveTableProps) {
console.log("from table", type)

  const location = useLocation();

  const urlParams = new URLSearchParams(location.search)
  const searchTerm =  urlParams.get("searchTerm")

  const User = useSelector((state: any) => state.user.currentUser)
  const [listing, setListing] = useState([]);
  const { loading } = useSelector((state: any) => state.loadingError)

  useEffect(() => {

    axios.get(`/api/leave/get-Appliedleaves?type=${type||undefined}&status=pending`)
      .then((Response) => {
        const data = Response.data;
        setListing(data)
        console.log(data)
      }
      )

      .catch((err) => console.log(err))
  }, [type,loading]);

   const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 10;
  
    const startIndex = (currentPage - 1) * 10
    const endIndex = startIndex + itemPerPage;
    
    const totalPages = Math.ceil(listing?.length / itemPerPage)
  
    const newAllUserTabledata = listing?.slice(startIndex, endIndex)
  

  return (
    <>
      <div className='flex items-center justify-end gap-4
       xsm:flex-col
       min-[500px]:flex-row
      '>
        

        <div className='flex gap-2 items-center'>
          <FaChevronRight className='rotate-180 p-3 h-10 w-10 rounded-md  bg-[#212121] border cursor-pointer border-[#424242] ' onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} />

          <p className=''>{currentPage}-{totalPages} </p>
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
