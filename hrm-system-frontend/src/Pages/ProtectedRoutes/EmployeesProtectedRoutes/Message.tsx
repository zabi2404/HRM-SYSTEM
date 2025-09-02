import QuestionList from '@/Sections/Detailpayroll/QuestionList'


// redux

import { useDispatch, UseDispatch,useSelector } from 'react-redux';
import { getMessage } from '@/Redux/Message/messageSlice';

export default function Message() {

  const messageObject = useSelector((state:any)=>state.Message.messageObject)
  return (
   <>
   <div >
    <h1 className='text-2xl font-semibold mb-4'>
      Messages
    </h1>

   </div>
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
