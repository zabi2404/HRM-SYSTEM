import QuestionList from '@/Sections/Detailpayroll/QuestionList'
import { QuestionListArray } from "../../../../public/Data2"
export default function Message() {
  return (
   <>
   <div >
    <h1 className='text-2xl font-semibold mb-4'>
      Messages
    </h1>

   </div>
    <div>
 <ul>
   {QuestionListArray.map((item) => {
     return (
       <QuestionList
         key={item.id}
         id={item.id}
         title={item.title}

       />
     )
   })}

 </ul>
</div>
   </>
  )
}
