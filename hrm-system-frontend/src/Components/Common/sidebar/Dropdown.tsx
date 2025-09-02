import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

export default function Dropdown(props) {
 

  const handleClick = () => {
    
   if( props.setActiveLink(props.title)){
    props.setActiveLink(null)
   }else{
    props.setActiveLink(props.title);
    if (window.innerWidth < 768) {
      props.setIsOpen(false)
            }
   }
    
    
  };

 

  const isActive = props.activelink === props.title; 

  return (
    <div
    onClick={()=>{
      
      props.setActiveLink(props.title);
      }}>

    <Link
      to={props.to}
      onClick={handleClick}
      className={`h-[44px] p-5 flex items-center rounded-[4px] border-l-4 border-transparent cursor-pointer
        
       ${isActive &&'bg-[#212121]'} text-white `}

    >
      {props.title}
    </Link>
    </div>
  );
}
