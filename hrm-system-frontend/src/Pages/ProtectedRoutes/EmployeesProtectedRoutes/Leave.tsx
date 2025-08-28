import SearchInput from '@/Components/Common/Navbar/Input';
import LeaveTitle from '@/Sections/Leave/LeaveTitle';
import LeaveTable from '@/Sections/Leave/LeaveTable';
import LeaveCards from '@/Sections/Leave/LeaveCards';
import LeaveHistoryTable from '@/Sections/Leave/LeaveHistoryTable';
import LeaveHistoryTitle from '@/Sections/Leave/LeaveHistoryTitle';

export default function Leave() {

  return (
    <>
  
      <LeaveCards/>
      <div className='bg-[#2B2B2B] px-4 flex flex-col gap-8 rounded-2xl my-8'>
        <LeaveTitle />
        <SearchInput />
        <LeaveTable />
        
      </div>
      <div className='bg-[#2B2B2B] p-4 flex flex-col gap-8 rounded-2xl'>
      <LeaveHistoryTitle />
      <LeaveHistoryTable/>
      </div>
    </>
  )
}
