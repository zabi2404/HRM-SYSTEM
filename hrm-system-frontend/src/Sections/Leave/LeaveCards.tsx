import InfoCard from '@/Components/Common/InfoCard'
import { CardAction } from '@/Components/Common/ui/card';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';


export default function LeaveCards() {
  const user = useSelector((state:any)=>state.user.currentUser)

  const [cardData , setCardData]=useState();
  
  useEffect(() => {
    
    axios.get(`/api/leave/get-leave-balance/${user.employeeId}`)
    .then((Response)=>{
      const data = Response.data;
      setCardData(data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }, []);

  let annualLeave = cardData?.totalAnnualLeave;
  let MonthlyLeave = annualLeave/12
  return (
   <>
    <div className='flex flex-wrap gap-2 justify-center items-center mt-8 '>

   


     <InfoCard
       title="Annual"
       description={cardData?.totalAnnualLeave}
       subTitle="Total"
       subTitle2='Remaning'
       description2={cardData?.remainingAnnualLeave}
     />
  
      <InfoCard
       title="Monthly"
       description={MonthlyLeave}
       subTitle="Total"
       subTitle2='Remaning'
       description2='5'
     />
      <InfoCard
       title="Sick Leave"
       description={cardData?.remainingSickLeave}
       subTitle="Total"
       subTitle2='Remaning'
       description2={cardData?.totalSickLeave}
     />
      <InfoCard
       title="Other"
       description={cardData?.remainingCasualLeave}
       subTitle="Total"
       subTitle2='Remaning'
       description2={cardData?.totalCasualLeave}
     />
   
   </div>
   
   </>
  )
}
