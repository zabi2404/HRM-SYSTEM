import QuestionList from '@/Sections/Detailpayroll/QuestionList'
import { QuestionListArray } from "../../../../public/Data2"

import AnnoucmentTitle from '@/Sections/Annoucment/AnnoucmentTitle'
export default function Anouncment() {
  return (
   <>
   <AnnoucmentTitle/>

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
