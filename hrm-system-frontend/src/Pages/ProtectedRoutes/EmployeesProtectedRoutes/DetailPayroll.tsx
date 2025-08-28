import QuestionList from '@/Sections/Detailpayroll/QuestionList';
import React, { useState } from 'react'
import { FaChevronLeft } from "react-icons/fa";
import { QuestionListArray } from "../../../../public/Data2"
import { FaChevronDown } from 'react-icons/fa6';
export default function DetailPayroll() {
  const [isOpen ,setIsOpen] = useState(false)
  return (
   
    <>
   <div className='bg-[#2B2B2B] p-4 rounded-lg'>

    <div className='flex items-center gap-4'>
    <FaChevronLeft />
<h1 className='text-2xl font-semibold'>
    Detail Payroll
</h1>
    </div>

    <div className='border p-4 rounded-lg mt-8 flex flex-col gap-6 max-h-[460px] customScroll overflow-auto' >

<div>
    <div className='flex items-center gap-4'>
        <img src="/images/blank-profile-picture-973460_1280.webp" alt="" 
        className='w-16 h-16 rounded-full '
        />
        <div>
            <h1 className='font-semibold text-2xl'>Zohaib Ali</h1>
            <p className='opacity-50 text-[14px]'>Mern Stack</p>
        </div>
    </div>
    <div>

        <div className='grid grid-cols-2 mt-4 '>
       <div className='flex flex-col gap-4'>
          <p className='opacity-50 text-[14px]'>Emplopyee Code</p>
          <p className='opacity-50 text-[14px]'>Emplopyee Status</p>
          <p className='opacity-50 text-[14px]'>Joining Date</p>
       </div>

       <div className='flex flex-col gap-4'>
            <h1 className='font-semibold '>Emp101</h1>
            <h1 className='font-semibold '>Active</h1>
            <h1 className='font-semibold '>16 Feb 20</h1>

       </div>
          
        </div>
  
          {/* <div className='flex items-center'>
          <p className='opacity-50 text-[14px]'>Emplopyee Code</p>
            <h1 className='font-semibold '>Emp101</h1>
          </div> */}
            
        
    </div>
</div>

 <div>
 <ul>
   {QuestionListArray.map((item) => {
     return (
       <QuestionList
         key={item.id}
         id={item.id}
         title={item.title}

       />
     )
   })}

 </ul>
</div>

<div>
  
<div className='rounded-[8px]  p-5  border mb-2 '>
       <div className='flex justify-between items-center'>
<h1 className=' font-bold mb-2'>Bank Information</h1>
<FaChevronDown className={`cursor-pointer ${isOpen && `rotate-180`}`} 
onClick={()=>{setIsOpen(!isOpen)}}
/>
  </div>
{
  isOpen&&
  <div className='grid grid-cols-2 mt-4 '>
       <div className='flex flex-col gap-4'>
          <p className='opacity-50 text-[14px]'>Bank Name</p>
          <p className='opacity-50 text-[14px]'>Acc Name</p>
          <p className='opacity-50 text-[14px]'>Acc Number</p>
       </div>

       <div className='flex flex-col gap-4'>
            <h1 className='font-semibold '>HBL</h1>
            <h1 className='font-semibold '>Zohaib</h1>
            <h1 className='font-semibold '>08070778979087</h1>

       </div>
          
        </div>}

</div>

</div>

    </div>
   </div>
    </>
  )
}
