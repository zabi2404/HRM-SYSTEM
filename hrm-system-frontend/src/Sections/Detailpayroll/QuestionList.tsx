"use client"

import {useState} from 'react'
import { FaChevronDown } from "react-icons/fa";
import AnswerList from './AnswerList';
import { MessageDeleteButton } from './MessageDeleteButton';
import { useSelector } from 'react-redux';

type QuestionListProps = {
    id: number;
    title: string;
    messageObject:any
}

const QuestionList = ({id, title,messageObject}:QuestionListProps) => {
  const  currentUser  = useSelector((state: any) => state.user.currentUser)
  
 const [isOpen, setisOpen] = useState(false);

    const HandleMenuLink = () => {
        setisOpen(!isOpen)
    }


  return (
  <>

      <li className='rounded-[8px]  p-5  border mb-6 '>
       <div className='flex justify-between items-center'>
<h1 className=' font-bold mb-2'>{title}</h1>
<div className='flex gap-4 items-center'>
  {currentUser.rest.role === 'admin' ||currentUser.rest.role==='hr'
&&
<MessageDeleteButton
   MessageID={id}
/>
  }
<FaChevronDown onClick={HandleMenuLink} className={`cursor-pointer  ${isOpen && `rotate-180`}`} />
</div>

  </div>
{isOpen &&
  messageObject.filter(item => item._id === id).map(item => (
    <AnswerList 
    key={item._id} 
    title={item.message}
    />
  ))
}

    </li>


  </>
  )
}

export default QuestionList;
