import AtendanceCardSection from '@/Sections/Attendance/AtendanceCardSection';
import AttendanceHistoryTable from '@/Sections/Attendance/AttendanceHistoryTable';
import AttendanceHistoryTitle from '@/Sections/Attendance/AttendanceHistoryTitle';
import AttendanceTitle from '@/Sections/Attendance/AttendanceTitle';
import LeaveHistoryTable from '@/Sections/Leave/LeaveHistoryTable';



export default function Attendance() {
  return (
   <>
   <div>
<AttendanceTitle/>
<AtendanceCardSection/>
 <div className='bg-[#2B2B2B] p-4 flex flex-col gap-8 rounded-2xl mt-4'>
      <AttendanceHistoryTitle />
      <AttendanceHistoryTable/>
      
      </div>
<div>

</div>

   </div>
   
   </>
  )
}
