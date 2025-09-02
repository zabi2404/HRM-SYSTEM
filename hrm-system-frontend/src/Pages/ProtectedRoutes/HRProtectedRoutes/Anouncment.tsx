import QuestionList from '@/Sections/Detailpayroll/QuestionList'
import { QuestionListArray } from "../../../../public/Data2"
import AnnoucmentTitle from '@/Sections/Annoucment/AnnoucmentTitle'
import { useEffect, useState } from 'react'
import axios from 'axios';


// redux

import { useDispatch, UseDispatch,useSelector } from 'react-redux';
import { getMessage } from '@/Redux/Message/messageSlice';
export default function Anouncment() {

  

  const messageObject = useSelector((state:any)=>state.Message.messageObject)
console.log(messageObject)



  return (
   <>
   <AnnoucmentTitle/>

    <div>
 <ul>
   {messageObject.map((item) => {
     return (
       <QuestionList
         key={item._id}
         id={item._id}
         title={item.title}
         messageObject={messageObject}

       />
     )
   })}


 </ul>
</div>
   </>
  )
}
