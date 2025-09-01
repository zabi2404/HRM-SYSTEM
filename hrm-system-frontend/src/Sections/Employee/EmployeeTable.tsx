import React, { useState } from 'react';
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { Badge } from '@/Components/Common/badge';
import { Link } from 'react-router-dom';
import { ConfirmButton } from '@/Components/Common/ConfirmButton';

export default function EmployeeTable({newAllUserTabledata}) {




 return (
    <div className="overflow-auto customScroll max-h-screen  w-full">
      <table className="min-w-[1040px] w-full text-white text-sm">
        <thead >
          <tr className='bg-[#212121] '>
            
            <th className='p-6 rounded-l-lg'>-</th>
            <th className='w-1/7 '>Employee ID</th>
            <th className='w-1/7 '>Employee Name</th>
            <th className='w-1/7'>Job Title</th>
            <th className='w-1/7'>Line Manager</th>
            <th className='w-1/7'>Department</th>
            <th className='w-1/7'>Employee Status</th>
            <th className='w-1/7 rounded-r-lg'>Actions</th>

            
          </tr>
        </thead>
        {newAllUserTabledata?.length>0&&
        <tbody>
          {newAllUserTabledata?.map((item) => (
            <tr key={item.id} className='text-center'>
              <td className='p-8'><input type="checkbox" /></td>
              <td className='p-8'> <div className='text-start'>
                    <Link to={`/profile/${item.user_Ref._id}`}>
                    <p className='hover:underline'>{item.employeeCode ||'-'}</p>
                    </Link>
                    <p className='text-xs text-gray-400'>{item.email}</p>
                 
                </div></td>
              <td className='p-8'>
                  <div className='text-start'>
                    <p>{item.name ||'-'}</p>
                    <p className='text-xs text-gray-400'>{item.email}</p>
                 
                </div>
              </td>
              <td>{item.job_title || '-'}</td>
              <td>{"-"}</td>
              <td>{item.department}</td>
              <td>
              <Badge className="bg-green-800 px-4 py-2 text-white">Active</Badge>
               </td>
              <td>
                <div className='flex gap-2 justify-center items-center'> 
                <ConfirmButton
                empID={item?._id}
                />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
}
        
      </table>
      {newAllUserTabledata?.length==0&&
        <h1 className='font-script text-3xl flex justify-center font-bold text-nowrap mt-4 mb-4 '>No Employee Record</h1>}
    </div>
  );
}


