import React from 'react'
import Input from './Input'//component
import { LuMessageSquareText } from "react-icons/lu"; //react icon
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
    <div className='flex item-center'>

      
    <Input/>


    <Link to=''>
    <p>About us</p>
    </Link>

    {/* message icon */}
    <LuMessageSquareText />

    {/* PROFILE ICON */}
    <div>
      <img 
      className='w-8 h-8'
      src="/images/Default_pfp.svg.png" alt="" />
    </div>

    </div>
    </>
  )
}
