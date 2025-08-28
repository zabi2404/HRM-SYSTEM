import { SelectMonth } from '../Leave/SelectMonth'

export default function AttendanceHistoryTitle() {
  return (
   <>
    <div className='flex items-center justify-between p-4'>
          
             <div>
               <h1 className='text-2xl font-semibold'>Attendance History</h1>
               <p className='text-[14px] opacity-50'>View your previous Attendance record</p>
             </div>
   
             
             <div className="flex items-center gap-4">
                <SelectMonth/>
            
   
             </div>
   
   
           </div>
   </>
  )
}
