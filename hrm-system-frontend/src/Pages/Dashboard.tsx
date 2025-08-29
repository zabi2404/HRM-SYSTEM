import React from 'react'

import { useSelector } from 'react-redux'


export default function Dashboard() {

  const user = useSelector((state:any)=>state.user.currentUser)

  return (
  <>
<div className='flex items-end gap-2'>
  <h1 className='text-[32px] font-script font-bold'>
    Hi, {" "}{user.rest.username}
    </h1>
    <p className='opacity-50 pb-1'>{user.rest.role}</p>
    </div>  
  
  </>
  )
}
