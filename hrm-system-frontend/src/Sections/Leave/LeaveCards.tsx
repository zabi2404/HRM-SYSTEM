import InfoCard from '@/Components/Common/InfoCard'
import React from 'react'

export default function LeaveCards() {
  return (
   <>
    <div className='flex flex-wrap gap-2 justify-center items-center mt-8 '>
   
     <InfoCard
       title="Annual"
       description="60"
       subTitle="Total"
       subTitle2='Remaning'
       description2='60'
     />
      <InfoCard
       title="Monthly"
       description="5"
       subTitle="Total"
       subTitle2='Remaning'
       description2='5'
     />
      <InfoCard
       title="Sick Leave"
       description="30"
       subTitle="Total"
       subTitle2='Remaning'
       description2='30'
     />
      <InfoCard
       title="Other"
       description="30"
       subTitle="Total"
       subTitle2='Remaning'
       description2='30'
     />
   
   </div>
   
   </>
  )
}
