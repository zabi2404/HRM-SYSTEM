import React from 'react'
import { Link } from 'react-router-dom';
import { RiHomeFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { PiCurrencyDollarSimpleBold } from "react-icons/pi";
import { PiPuzzlePieceFill } from "react-icons/pi";
import { useLocation } from 'react-router-dom';
import { IoSettings } from "react-icons/io5";
import { TbBrandWebflow } from "react-icons/tb";


export default function CloseSIdeBar(props) {

  const location = useLocation();
const isActive = location.pathname.startsWith();
  
console.log(isActive)
  return (
  <>
  <div className='fixed top-25 '>
<div className='flex flex-col  gap-13 '>

    <Link   onClick={()=>{props.setIsOpen(true)}}      to="/dashboard">
        <RiHomeFill className={`${  location.pathname === '/dashboard' || location.pathname === '/dashboard/all-pages' ||location.pathname === '/dashboard/products'  || location.pathname ==='/dashboard/reports' ? 'text-[#CB3CFF]' : "white"}`} />
      </Link>


      <Link        to="/feature">
        <FaStar className={`${  location.pathname === '/feature'  ? 'text-[#CB3CFF]' : "white"}`} />
      </Link>


      <Link        to="/user">
        <FaUser className={`${  location.pathname === '/user'  ? 'text-[#CB3CFF]' : "white"}`} />
      </Link>

 
      <Link        to="/pricing">
        <PiCurrencyDollarSimpleBold className={`${  location.pathname === '/pricing'  ? 'text-[#CB3CFF]' : null}`} />
      </Link>

  
      <Link        to="/integration">
        <PiPuzzlePieceFill className={`${  location.pathname === '/integration'  ? 'text-[#CB3CFF]' : null}`} />
      </Link>

       <Link        to="/setting">
        <IoSettings
 className={`${  location.pathname === '/setting'  ? 'text-[#CB3CFF]' : null}`} />
      </Link>

       <Link        to="/template-pages">
        <TbBrandWebflow className={`${  location.pathname === '/template-pages'  ? 'text-[#CB3CFF]' : null}`} />
      </Link>
              </div>
  </div>
  
  
  </>
  )
}
