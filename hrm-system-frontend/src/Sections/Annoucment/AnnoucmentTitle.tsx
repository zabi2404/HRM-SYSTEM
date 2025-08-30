import { AddNewMessage } from './AddNewMessage'
export default function AnnoucmentTitle() {
  return (
  <>
   <div className='flex justify-between
   xsm:mt-20 md:mt-4
   '>
      <h1 className='text-2xl font-semibold mb-8'>
        Messages
      </h1>
         <AddNewMessage />
     </div>
  
  </>
  )
}
