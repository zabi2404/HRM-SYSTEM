import React from 'react'
import { Link, useLocation } from 'react-router-dom';

export default function Dropdown(props) {
  const location = useLocation();

  const fullPath = 
    props.parentpath === '/'
      ? `/${props.to}`
      : `${props.parentpath}/${props.to}`;

  const isActive = location.pathname === fullPath;

  const isParentActive = location.pathname.startsWith(props.parentpath);

  const handleClick = () => {
    props.setActiveLink(props.title);
    if (window.innerWidth < 768) {
      props.setIsOpen(false);
    }
  };

  return (
    <Link
      to={fullPath}
      onClick={handleClick}
      className={`h-[44px] p-5 flex items-center rounded-[4px] border-l-4 border-transparent cursor-pointer 
        ${
          isActive && isParentActive
            ? 'border-l-[#CB3CFF] bg-[#0b173978] text-white'
            : ''
        }`}
    >
      {props.title}
    </Link>
  );
}
