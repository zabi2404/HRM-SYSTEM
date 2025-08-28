import React from 'react'

type AnswerListProps ={
  title:string;
}


 const AnswerList = ({title}:AnswerListProps) => {
  return (
   <>
   <div className='w-[400px] overflow-hidden'>
    <p className='  text-[16px] opacity-50 '>
        {title}
    </p>

   </div>

   
   </>
  )
}

export default AnswerList;