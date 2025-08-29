import React, { useState } from 'react';
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";

export default function EmployeeTable({newAllUserTabledata}) {




 return (
    <div className="overflow-auto customScroll max-h-screen  w-full">
      <table className="min-w-[1040px] w-full text-white text-sm">
        <thead >
          <tr className='bg-[#212121] '>
            
            <th className='p-6 rounded-l-lg'>-</th>
            <th className='w-1/6 '>Employee Name</th>
            <th className='w-1/6'>Job Title</th>
            <th className='w-1/6'>Line Manager</th>
            <th className='w-1/6'>Department</th>
            <th className='w-1/6'>Employee Status</th>
            <th className='w-1/6 rounded-r-lg'>Actions</th>

            
          </tr>
        </thead>

        <tbody>
          {newAllUserTabledata?.map((item) => (
            <tr key={item.id} className='text-center'>
              <td className='p-8'><input type="checkbox" /></td>
              <td className='p-8'>
               
                
                  <div className='text-start'>
                    <p>{item.name ||'-'}</p>
                    <p className='text-xs text-gray-400'>{item.email}</p>
                 
                </div>
              </td>
              <td>{item.job_title || '-'}</td>
              <td>{"-"}</td>
              <td>{item.department}</td>
              <td>{"Active"}</td>
              <td>
                <div className='flex gap-2 justify-center'> <FaPen /> <MdDelete /></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
