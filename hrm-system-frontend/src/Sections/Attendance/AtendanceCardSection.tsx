import React from 'react'
import InfoCard from '@/Components/Common/InfoCard';

export default function AtendanceCardSection() {
  return (
    <>
    
    <div className='flex gap-4 justify-between mt-8'>

  <InfoCard
    title="Work Schedule"
    description="48 Hours"
  />
   <InfoCard
    title="Logged Time"
    description="48 Hours"
  />
   <InfoCard
    title="Paid time"
    description="48 Hours"
  />
   <InfoCard
    title="Over time"
    description="48 Hours"
  />

</div>
    </>
  )
}
