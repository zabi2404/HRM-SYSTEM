import { Button } from "@/Components/Common/ui/button"
import { AddNewUser } from '@/Components/HR/Employee/AddNewUser';
export default function ManageYourEmplopyee() {

  return (
   <>
   
   
      <div className='flex  items-center justify-between p-4 
      xsm:flex-col xsm:text-center xsm:gap-4 xsm:p-2
      sm:flex-row sm:text-start 
      '>
             {/* Title */}
             <div>
               <h1 className='text-2xl font-semibold'>Emplopyee</h1>
               <p className='text-[14px] opacity-50'>Manage your Employees</p>
             </div>
   
             {/* BUTTONS */}
             <div className="flex items-center gap-4
             
             ">
               <Button variant='outline'>Button</Button>
               <AddNewUser />
               {/* <Button> </Button> */}
   
             </div>
   
   
           </div>
   </>
  )
}
