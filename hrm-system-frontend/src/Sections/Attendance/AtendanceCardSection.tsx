import React, { useEffect, useState } from 'react'
import InfoCard from '@/Components/Common/InfoCard';
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function AtendanceCardSection() {

  const loggedTime = (checkin?: string, checkout?: string) => {
    const timeToSeconds = (time?: string) => {
      if (!time) return 0; // handle undefined
      const [hours, minutes, seconds] = time.split(':').map(Number);
      return hours * 3600 + minutes * 60 + seconds;
    };
  
    const secondsToHHMMSS = (seconds: number) => {
      const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
      const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
      const s = Math.floor(seconds % 60).toString().padStart(2, '0');
      return `${h}:${m}:${s}`;
    };
  
    const loggedSeconds = timeToSeconds(checkout) - timeToSeconds(checkin);
    return secondsToHHMMSS(Math.max(loggedSeconds, 0)); // avoid negative
  };
  
  // calculte defiecit and over time
  const calculateOvertimeDeficit = (checkin: string, checkout: string) => {
    const timeToSeconds = (time: string) => {
      if (!time) return 0;
      const [h, m, s] = time.split(':').map(Number);
      return h * 3600 + m * 60 + s;
    };
  
    const secondsToHHMMSS = (seconds: number) => {
      const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
      const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
      const s = Math.floor(seconds % 60).toString().padStart(2, '0');
      return `${h}:${m}:${s}`;
    };
  
    const worked = timeToSeconds(checkout) - timeToSeconds(checkin);
    const standard = 9 * 3600;
  
    if (worked > standard) {
      return { overtime: secondsToHHMMSS(worked - standard), deficit: '00:00:00' };
    } else if (worked < standard) {
      return { overtime: '00:00:00', deficit: secondsToHHMMSS(standard - worked) };
    } else {
      return { overtime: '00:00:00', deficit: '00:00:00' };
    }
  };

  const [listing , setListing] = useState();
const user = useSelector((state: any) => state.user.currentUser);
const { loading } = useSelector((state: any) => state.loadingError)
useEffect(() => {
  axios.get(`/api/attendance/get-attendance/${user.employeeId}`)
  .then((response)=>{
    console.log(response.data)
    const data = response.data;
    setListing(data)
  })
  .catch((error)=>{
    console.log(error)
  })
}, [loading]);

const record = Array.isArray(listing) ? listing[0] : null;
const loginime = loggedTime(record?.checkin,record?.checkout)
const overTime =   calculateOvertimeDeficit(record?.checkin, record?.checkout).overtime
const deficit = calculateOvertimeDeficit(record?.checkin, record?.checkout).deficit

      


  return (
    <>
    
    <div className='flex gap-4 justify-between mt-8'>

  <InfoCard
    title="Work Schedule"
    description="9 Hours"
  />
   <InfoCard
    title="Logged Time"
    description={loginime}
  />
   <InfoCard
    title="Paid time"
    description={overTime}
  />
   <InfoCard
    title="Over time"
    description={deficit}
  />

</div>
    </>
  )
}
