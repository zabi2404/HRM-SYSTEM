
import { SelectMonth } from '../Leave/SelectMonth'

export default function EmployeePayrollTitle() {
  
  
  return (
   <>
    <div className='flex items-center justify-between p-4'>
             <div>
               <h1 className='text-2xl font-semibold'>Employee Payroll</h1>
               <p className='text-[14px] opacity-50'>View all Emplopyee Payroll </p>
             </div>
           <SelectMonth/>
           </div>
   </>
  )
}
