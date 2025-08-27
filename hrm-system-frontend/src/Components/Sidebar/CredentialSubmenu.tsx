import React from 'react';
import { Link } from 'react-router-dom';

export default function CredentialSubmenu(props) {
  const Icon = props.icon;

  return (
    <li
      className={`flex gap-2 items-center cursor-pointer rounded-[7px] p-4 pr-8 w-full ${
        props.activeLink === props.title ? 'bg-[#0A1330] text-white' : ''
      }`}
    >
      <Icon />
      <Link
        onClick={() => props.setActiveLink(props.title)}
        className='text-nowrap'
        to={props.to}
      >
        {props.title}
      </Link>
    </li>
  );
}
