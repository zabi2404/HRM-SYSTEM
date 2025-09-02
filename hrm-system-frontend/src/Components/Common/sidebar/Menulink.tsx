import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { RiHomeFill } from "react-icons/ri";
import { FaChevronRight } from "react-icons/fa6";
import Dropdown from './Dropdown';
import { hrSubmenu, adminSubmenu } from '../../../../public/Data';

import { useLocation } from 'react-router-dom';
import { useDispatch, UseDispatch, useSelector } from 'react-redux';


export default function Menulink(props) {


  const dispatch = useDispatch();
  const currentUser = useSelector((state: any) => state.user.currentUser)

  const array = currentUser?.rest.role === "admin"
    ? adminSubmenu
    : currentUser?.rest.role === "hr"
      ? hrSubmenu
      : [];

  const [activelink, setActiveLink] = useState(null);

  let Icon = props.icon

  const location = useLocation();
  const isParentActive =
    location.pathname === props.to ||
    location.pathname.startsWith(`${props.to}/`);



  const matchedSubmenu = array.find(item => item.title === props.title);



  const handleClickLink = () => {
    if (props.activelink === props.title) {
      props.setActiveLink(null); // close if already open
      setActiveLink(null)
      
    } else {
      props.setActiveLink(props.title); // open this one
      setActiveLink(null)
      
    }

  };
  
  const isActive = props.activelink === props.title;
  return (
    <>



      {/* MENU LINK */}
      {/* <li className='flex my-6  items-center' > */}
      <li className="flex items-center cursor-pointer py-4  first:mt-6 last:mb-6"
        onClick={handleClickLink}
      >

        {/* ICON */}

        {Icon && <Icon className={`${isParentActive ? 'opacity-75' : null} inline-block w-5 h-5 mr-2`} />}

        {/* IMG */}
        {props.img && <img className='mr-4' src={`${props.img}`} alt="profilepic" />}


        <Link to={props.to} className={`${isParentActive ? 'opacity-75' : null} flex-1`} >
          {props.name && <span className='text-white text-[14px] block'>{props.name}</span>}
          {props.title}


        </Link>

        {matchedSubmenu &&
          <FaChevronRight className={`transition-all duration-600 ease-in-out ml-auto ${isActive && `rotate-90`}`} onClick={(e) => {
            e.stopPropagation(); // prevent parent li click
            handleClickLink();
          }} />}


      </li>



      {/* SUBMENU */}

      {currentUser.rest.role !== 'employee' &&
        array?.map((item, index) =>
          item.title === props.title ? (

            <ul key={index} className={`
        ml-6 overflow-hidden transition-all duration-600 ease-in-out 
        ${isActive ? 'max-h-[500px] opacity-100 translate-y-0 ' : 'max-h-0 opacity-0 -translate-y-2'}
      `}>

              {item.items.map((sub, i) => (
                <Dropdown
                  key={i}
                  title={sub.name}
                  to={sub.path}
                  parentpath={props.to}
                  activelink={activelink}
                  setActiveLink={setActiveLink}
                  setIsOpen={props.setIsOpen}
                />
              ))}
            </ul>
          ) : null
        )
      }
    </>
  )
}
