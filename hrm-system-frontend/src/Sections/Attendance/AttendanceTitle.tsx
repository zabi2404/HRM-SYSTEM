import React, { useState } from 'react'
import { BiTimer } from "react-icons/bi";
import { TimerButtonModal } from './TimerButtonModal';
export default function AttendanceTitle() {

  const [isOpen,setIsOpen]=useState(false);
  
  return (
    <>
    <div className='flex justify-between'>
    <div>
      <h1 className='text-2xl font-semibold'>My Attendance</h1>
      <p className='text-[14px] opacity-50'>Manage your Attendance</p>
    </div>
    <div>
      <button className='flex cursor-pointer gap-3 items-center bg-white px-5 py-3 text-black rounded-md'
     onClick={()=>{setIsOpen(true)}} 
      > 
      <BiTimer className='w-6 h-6' />
    
        Clocks in
        00h 00m 00s
      </button>

      <TimerButtonModal 
      isOpen={isOpen} onClose={() => setIsOpen(false)}
      />
    </div>
    </div>
    </>
  )
}
