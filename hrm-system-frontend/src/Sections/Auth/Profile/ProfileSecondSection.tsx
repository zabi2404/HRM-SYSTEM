import React from 'react'
import { FaPen } from "react-icons/fa";
export default function ProfileSecondSection() {
  return (
   <>
   
    <div className='bg-[#212121] flex flex-col gap-10 rounded-lg p-4 pt-10 overflow-auto max-h-[700px] customScroll'>
                       <div className='border border-[#424242] rounded-lg'>
                           {/* title */}
   
                           <div className="flex justify-between  border-b border-[#424242] p-4" >
                               <h1 className='text-2xl font-semibold'>Personal Info</h1>
                               <FaPen />
   
                           </div>
                           {/* body */}
                           <div className='p-4 flex flex-col gap-4'>
                               <div className='grid grid-cols-2 items-center '>
                                   <p className='opacity-50'>Full Name</p>
                                   <p>Zohaib Ali</p>
                               </div>
                               <div className='grid grid-cols-2 items-center '>
                                   <p  className='opacity-50'>Date of Birth </p>
                                  {}
                               </div>
                               <div className='grid grid-cols-2 items-center '>
                                   <p  className='opacity-50'>Email Address </p>
                                  {}
                               </div>
   
                               <div className='grid grid-cols-2 items-center '>
                                   <p  className='opacity-50'>Gender </p>
                                  {}
                               </div>
                               <div className='grid grid-cols-2 items-center '>
                                   <p  className='opacity-50'>Phone Number </p>
                                  {}
                               </div>
   
                           </div>
   
                       </div>
   
                       <div className='border border-[#424242] rounded-lg'>
                           {/* title */}
   
                           <div className="flex justify-between  border-b border-[#424242] p-4" >
                               <h1 className='text-2xl font-semibold'>Address</h1>
   
   
                           </div>
                           {/* body */}
                           <div className='p-4 flex flex-col gap-4'>
                               <div className='grid grid-cols-2 items-center '>
                                   <p  className='opacity-50'>Primary Address</p>
                                  {}
                               </div>
                               <div className='grid grid-cols-2 items-center '>
                                   <p  className='opacity-50'>Country</p>
                                   {}
                               </div>
                               <div className='grid grid-cols-2 items-center '>
                                   <p  className='opacity-50'>Province/State</p>
                                   {}
                               </div>
   
                               <div className='grid grid-cols-2 items-center '>
                                   <p  className='opacity-50'>City </p>
                                   {}
                               </div>
   
   
                           </div>
   
                       </div>
   
                       <div className='border border-[#424242] rounded-lg'>
                           {/* title */}
   
                           <div className="flex justify-between  border-b border-[#424242] p-4" >
                               <h1 className='text-2xl font-semibold'>Academic History</h1>
   
   
                           </div>
                           {/* body */}
                           <div className='p-4 flex flex-col gap-4'>
                               <div className='grid grid-cols-2 items-center '>
                                   <p  className='opacity-50'>Degree</p>
                                  {}
                               </div>
                               <div className='grid grid-cols-2 items-center '>
                                   <p  className='opacity-50'>Institution</p>
                                  {}
                               </div>
                               <div className='grid grid-cols-2 items-center '>
                                   <p  className='opacity-50'>Year</p>
                                  {}
                               </div>
   
                               <div className='grid grid-cols-2 items-center '>
                                   <p  className='opacity-50'>Achievements </p>
                                   {}
                               </div>
   
   
                           </div>
   
                       </div>
   
                       <div className='border border-[#424242] rounded-lg'>
                           {/* title */}
   
                           <div className="flex justify-between  border-b border-[#424242] p-4" >
                               <h1 className='text-2xl font-semibold'>Work Information</h1>
   
   
                           </div>
                           {/* body */}
                           <div className='p-4 flex flex-col gap-4'>
                               <div className='grid grid-cols-2 items-center '>
                                   <p  className='opacity-50'>Experience</p>
                                  {}
                               </div>
                               <div className='grid grid-cols-2 items-center '>
                                   <p  className='opacity-50'>Skills</p>
                                   {}
                               </div>
                               <div className='grid grid-cols-2 items-center '>
                                   <p  className='opacity-50'>Certifications</p>
                                  {}
                               </div>
   
                               <div className='grid grid-cols-2 items-center '>
                                   <p  className='opacity-50'>Languages </p>
                                   {}
                               </div>
   
   
                           </div>
   
                       </div>
                   </div>
   </>
  )
}
