import React from 'react'
import { RiErrorWarningLine } from "react-icons/ri";


type  AttendanceCardProps={
    title?:string
    description?:number
    subTitle?:string
    subTitle2?:string
    description2?:number
}
export default function InfoCard({title,description,subTitle, description2,subTitle2}:AttendanceCardProps) {
  return (
    <>
    
    <div className='bg-[#2B2B2B] flex flex-col gap-8 p-4 rounded-lg min-w-[250px] '>

<div className=' flex justify-between items-center '>
    <h1>{title}</h1> 
    <RiErrorWarningLine />

</div>
<div className='flex flex-col gap-2'>
  <div className='flex justify-between'>
    {subTitle&&
        <p>{subTitle}</p>}
    <p className="opacity-50">
{description}
    </p>
</div>
{
    subTitle2&&description2&&
    <div className='flex justify-between'>
  
        <p>{subTitle2}</p>
    
   
        <p className="opacity-50">
{description2}
    </p>
</div>
}  
</div>


    </div>
    </>
  )
}
