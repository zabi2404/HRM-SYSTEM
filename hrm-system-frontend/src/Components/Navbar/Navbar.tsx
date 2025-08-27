import React from 'react'
import Input from './Input'//component
import { LuMessageSquareText } from "react-icons/lu"; //react icon
import { Link } from 'react-router-dom';
import { GalleryVerticalEnd } from 'lucide-react';
import { FiSidebar } from "react-icons/fi";

export default function Navbar({setIsOpen,isopen}:any) {
  return (
    <>
      <div className='flex item-center   justify-between pr-10
      max-[1000px]:hidden
      '>
        <div className='flex gap-4'>
         
          <div className="flex justify-center gap-2 md:justify-start">
            <a href="#" className="flex items-center gap-2 font-medium">
              <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
                <GalleryVerticalEnd className="size-4" />
              </div >
              <p className='text-nowrap'>HR Dashboard</p>
            </a>
          </div>

        </div>

        <div className='flex items-center gap-4'>

          <Input />
          <Link to=''>
            <p className='whitespace-nowrap'>About us</p>
          </Link>
        </div>

        <div className='flex items-center gap-6'>

          {/* message icon */}
          <LuMessageSquareText className='w-5 h-5' />

          {/* PROFILE ICON */}
          <div>
            <img
              className='w-8 h-8'
              src="/images/Default_pfp.svg.png" alt="" />
          </div>
        </div>



      </div>



    </>
  )
}
