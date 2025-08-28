import { SelectMonth } from './SelectMonth'

export default function LeaveHistoryTitle() {
  return (
   <>
    <div className='flex items-center justify-between p-4
    xsm:flex-col xsm:gap-4 xsm:text-center
    sm:flex-row sm:gap-0 sm:text-start
    '>
          
             <div>
               <h1 className='text-2xl font-semibold'>Leaves History</h1>
               <p className='text-[14px] opacity-50'>View your previous Leaves record</p>
             </div>
   
             
             <div className="flex items-center gap-4">
                <SelectMonth/>
            
   
             </div>
   
   
           </div>
   </>
  )
}
