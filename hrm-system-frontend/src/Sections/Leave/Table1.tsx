import React, { useState } from 'react';
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { Badge } from '@/Components/Common/badge';
import { ConfirmButton } from '@/Components/Common/ConfirmButton';
import { LeaveDelConfirmButton } from './LeaveDelConfirmButton';
import { AddNewReq } from '@/Components/Employee/Leave/AddNewReq';
import { EditLeavedialouge } from './EditLeavedialouge';

export default function Table1({newAllUserTabledata}) {

  function daysInclusive(from, to = from) {
    const start = new Date(from + "T00:00:00Z"); 
    const end   = new Date(to   + "T00:00:00Z");
    const msPerDay = 24 * 60 * 60 * 1000;
    return Math.floor((end - start) / msPerDay) + 1;
  }
 

console.log(newAllUserTabledata)
 return (
    <div className="overflow-auto customScroll max-h-screen  w-full">
      <table className="min-w-[1040px] w-full text-white text-sm">
        <thead >
          <tr className='bg-[#212121] '>
            
            
            <th className='w-1/7  p-6 rounded-l-lg'>From</th>
            <th className='w-1/7'>To</th>
            <th className='w-1/7'>Total Days</th>
            <th className='w-1/7'>Type</th>
            <th className='w-1/7'>Attachment</th>
            <th className='w-1/7'>Status</th>
            <th className='w-1/7 rounded-r-lg'>Action</th>
            
          </tr>
        </thead>
{newAllUserTabledata?.length>0&&
        <tbody>
          {newAllUserTabledata?.map((item) => (
            <tr key={item.id} className='text-center'>
             
              <td className='p-8'>
                
                  
                  <div className='text-start'>
                    <p className='text-nowrap'>{item.start}</p>
                    <p className='text-xs text-gray-400'>{item.email}</p>
                  
                </div>
              </td>
              <td>{item.end||"-"}</td>
              <td>{ daysInclusive(item.start, item.end)||"1"}</td>
              <td>{item.type}</td>
              <td>{item.file || "-"}</td>
              <td>
              
                <Badge className=" px-4 py-2 ">
  {item.status}
                </Badge>
                </td>
              <td>
                <div className='flex gap-2 justify-center items-center'>
                   <EditLeavedialouge
                    LeaveId={item?._id}
                   />
                   <LeaveDelConfirmButton
                                LeaveId={item?._id}
                                /></div>
              </td>
            </tr>
          ))}
        </tbody>
        }

      </table>
      {newAllUserTabledata?.length==0&&
        <h1 className='font-script text-3xl flex justify-center font-bold text-nowrap mt-4'>Have No Leave History</h1>}
    </div>
  );
}
