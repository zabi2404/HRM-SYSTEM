import React, { useState } from 'react';
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";

export default function EmployeeTable({newAllUserTabledata}) {




 return (
    <div className="overflow-auto customScroll max-h-screen  w-full">
      <table className="min-w-[1040px] w-full text-white text-sm">
        <thead >
          <tr className='bg-[#212121] '>
            
            <th className='p-6'>-</th>
            <th className='w-1/6'>Employee Name</th>
            <th className='w-1/6'>Job Title</th>
            <th className='w-1/6'>Line Manager</th>
            <th className='w-1/6'>Department</th>
            <th className='w-1/6'>Employee Status</th>
            <th className='w-1/6'>Actions</th>

            
          </tr>
        </thead>

        <tbody>
          {newAllUserTabledata.map((item) => (
            <tr key={item.id} className='text-center'>
              <td className='p-8'><input type="checkbox" /></td>
              <td className='p-8'>
                <div className='flex gap-2 items-center'>
                  <img
                    src="/Images/Avatar Circle.svg"
                    alt=""
                    className="w-8 h-8 rounded-full"
                  />
                  <div className='text-start'>
                    <p>{item.name}</p>
                    <p className='text-xs text-gray-400'>{item.email}</p>
                  </div>
                </div>
              </td>
              <td>{item.phone}</td>
              <td>{item.country}</td>
              <td>{item.company}</td>
              <td>{item.status}</td>
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
