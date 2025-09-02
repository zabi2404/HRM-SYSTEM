import InfoCard from '@/Components/Common/InfoCard'
import { CardAction } from '@/Components/Common/ui/card';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';


export default function LeaveCards() {
  const user = useSelector((state:any)=>state.user.currentUser)

  interface LeaveCardData {
    remainingAnnualLeave: number;
    totalAnnualLeave: number;
    totalSickLeave: number;
    remainingSickLeave: number;
    totalCasualLeave: number;
    remainingCasualLeave: number;
  }

  const [cardData, setCardData] = useState<LeaveCardData>({
    remainingAnnualLeave: 0,
    totalAnnualLeave: 0,
    totalSickLeave: 0,
    remainingSickLeave: 0,
    totalCasualLeave: 0,
    remainingCasualLeave: 0,
  });
  
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

  let annualLeave = cardData?.remainingAnnualLeave ?? 0;
let monthly;
  let annual = 60 - annualLeave;
  if(annual>5){monthly=0}
  else{
    monthly= 5- annual
  }

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
       description={5}
       subTitle="Total"
       subTitle2='Remaning'
       description2={monthly>0?monthly:'0'}
     />
      <InfoCard
       title="Sick Leave"
       description={cardData?.totalSickLeave}
       subTitle="Total"
       subTitle2='Remaning'
       description2={cardData?.remainingSickLeave}
     />
      <InfoCard
       title="Other"
       description={cardData?.totalCasualLeave}
       subTitle="Total"
       subTitle2='Remaning'
       description2={cardData?.remainingCasualLeave}
     />
   
   </div>
   
   </>
  )
}
