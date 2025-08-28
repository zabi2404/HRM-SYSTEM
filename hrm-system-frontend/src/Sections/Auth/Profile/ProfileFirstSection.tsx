import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'

export default function ProfileFirstSection() {
  return (
   <>
     <div className='bg-[#212121] rounded-lg px-6 py-4 flex flex-col justify-between  '>
   
                       <div className=' text-center mx-auto '>
                           <div className='w-30 h-30 mx-auto mb-2'>
                               <img className='rounded-full object-cover' src="../../../public/images/blank-profile-picture-973460_1280.webp" alt="" />
                           </div>
                           <h1 className='text-2xl font-semibold'>Zohaib</h1>
                           <p>Developer</p>
                           <button className='bg-white px-6 py-2 my-6 text-black rounded-[8px] '>Active</button>
                       </div>
                       {/* basic info */}
                       <div className='flex flex-col  gap-6 border-t pt-4 border-[#424242]'>
                           <div className='flex items-center gap-2'>
                               <IoIosMail />
                               <p>
                                   zohaib24a@gmail.com
                               </p>
                           </div>
                           <div className='flex items-center gap-2'>
                               <FaPhoneAlt className='w-4 h-4' />
   
                               <p>03008901960</p>
                           </div>
   
                       </div>
                       {/* office info */}
                       <div className='flex flex-col gap-4 mt-4 border-t pt-4'>
                           <div>
                               <h1 className='text-[16px] font-semibold opacity-50'>Department</h1>
                               <p>Designer</p>
                           </div>
   
                           <div>
                               <h1 className='text-[16px] font-semibold opacity-50'>Line Manager</h1>
                               <p>Zohaib</p>
                           </div>
   
                       </div>
                    <div className='w-full flex justify-center mt-4'>
                        <button className='text-center p-4 bg-white text-black w-full rounded-lg cursor-pointer hover:opacity-80'>
                            LogOut
                        </button>
                    </div>
                   </div>
   </>
  )
}
