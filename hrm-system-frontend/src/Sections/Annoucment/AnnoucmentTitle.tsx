import { AddNewMessage } from './AddNewMessage'
export default function AnnoucmentTitle() {
  return (
  <>
   <div className='flex justify-between'>
      <h1 className='text-2xl font-semibold mb-8'>
        Messages
      </h1>
         <AddNewMessage />
     </div>
  
  </>
  )
}
