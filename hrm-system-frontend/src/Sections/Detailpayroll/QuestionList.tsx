"use client"

import {useState} from 'react'
import { FaChevronDown } from "react-icons/fa";

import AnswerList from './AnswerList';
import { AnswerListArray } from '../../../public/Data2';


type QuestionListProps = {
    id: number;
    title: string;
}

 const QuestionList = ({id, title}:QuestionListProps) => {

 const [isOpen, setisOpen] = useState(false);

    const HandleMenuLink = () => {
        setisOpen(!isOpen)
    }


  return (
  <>

      <li className='rounded-[8px]  p-5  border mb-6 '>
       <div className='flex justify-between items-center'>
<h1 className=' font-bold mb-2'>{title}</h1>
<FaChevronDown onClick={HandleMenuLink} className={`cursor-pointer  ${isOpen && `rotate-180`}`} />
  </div>
{isOpen &&
  AnswerListArray.filter(item => item.id === id).map(item => (
    <AnswerList key={item.id} 
    title={item.title}
    />
  ))
}

    </li>


  </>
  )
}

export default QuestionList;
