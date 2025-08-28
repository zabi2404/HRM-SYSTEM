import SearchInput from '@/Components/Common/Navbar/Input'
import PayrollTable from '@/Sections/Payroll/PayrollTable'
import PayrollTitle from '@/Sections/Payroll/PayrollTitle'


export default function Payroll() {
  return (
      <div className='bg-[#2B2B2B] p-4 flex flex-col gap-8 rounded-2xl'>
                       <PayrollTitle/>
                       <SearchInput
                           placeholder="Enter Month" />
                       <PayrollTable />
                   </div>
  )
}
 