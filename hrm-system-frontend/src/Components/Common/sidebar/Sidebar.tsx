import React, { useState } from 'react'
import Data from '../../../../public/Data.js'
import Menulink from './Menulink.js'
import { hrMenu, adminMenu } from '../../../../public/Data.js'
import { FaArrowRight } from "react-icons/fa6";
import Input from '../Navbar/Input.js';

import { useDispatch, UseDispatch, useSelector } from 'react-redux';
import { GalleryVerticalEnd } from 'lucide-react';
import { Link } from 'react-router-dom';


export default function sidebar(props) {

  const dispatch = useDispatch();
  const currentUser = useSelector((state: any) => state.user.currentUser)
  let array = []
  if (currentUser.rest.role === 'admin') { array = adminMenu }
  if (currentUser.rest.role === 'hr') { array = hrMenu }
  if (currentUser.rest.role === 'employee') { array = Data }

  const [activelink, setActiveLink] = useState(null);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <>

      <div className='h-full overflow-y-scroll customScroll pd-4 ' >
        <div className='mb-4'>

          {/* <div className='flex justify-between mb-8'>
            <img src="/Logo.svg" alt="Logo" />
           
         
          </div> */}
          <div className="flex  gap-2 justify-start mb-4 min-[1000px]:hidden">
            <a href="#" className="flex items-center gap-2 font-medium">
              <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
                <GalleryVerticalEnd className="size-4" />
              </div >
              <p className='text-nowrap text-2xl'>HR Dashboard</p>
            </a>
          </div>

          <div className='mb-8'>
            <Input
            />
          </div>

        </div>

        <div className=''>

          <ul className=' text-[14px] font-[500] w-full '>
            {
              array?.map((item, index) => (
                <Menulink key={index} title={item.title}
                  icon={item.icon}
                  to={item.to}
                  activelink={activelink}
                  setActiveLink={setActiveLink}
                  setIsOpen={props.setIsOpen}
                  setIsOpenMenu={setIsOpenMenu}
                  isOpenMenu={isOpenMenu}
                />
              ))
            }
          </ul>
          <hr className='border-t-[#FFFFFF]' />
<div className="bg-[#212121] min-[1000px]:hidden   border border-[#424242] flex items-center justify-center rounded-[4px] mt-4">
            <Link to='/profile'>
            <button type="submit" className='text-white h-[44px] cursor-pointer flex items-center justify-between '>
             Profile
              <FaArrowRight className='ml-2' />

            </button>
            </Link>
          </div>
         {currentUser.rest.role === 'admin'&&
<div className="bg-[#212121]  border border-[#424242] flex items-center justify-center rounded-[4px] mt-4">
            <Link to='/signup'>
            <button type="submit" className='text-white h-[44px] cursor-pointer flex items-center justify-between '>
             Create New User
              <FaArrowRight className='ml-2' />

            </button>
            </Link>
          </div>
         }
         
          


        </div>
      </div>
    </>
  )
}

