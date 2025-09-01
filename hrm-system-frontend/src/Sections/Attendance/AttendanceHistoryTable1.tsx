import React, { useState } from 'react';
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";

export default function AttendanceHistoryTable1({newAllUserTabledata}) {

  const loggedTime = (checkin: string, checkout: string) => {
    const timeToSeconds = (time: string) => {
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
    return secondsToHHMMSS(loggedSeconds);
  };
  
  // calculte defiecit and over time
  const calculateOvertimeDeficit = (checkin: string, checkout: string) => {
    const timeToSeconds = (time: string) => {
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

 return (
    <div className="overflow-auto customScroll max-h-screen  w-full">
      <table className="min-w-[1040px] w-full text-white text-sm">
        <thead >
          <tr className='bg-[#212121] '>
            
         
            <th className='p-6 rounded-l-lg w-1/7'>Date</th>
            <th className='w-1/7'>Clock In</th>
            <th className='w-1/7'>Clock Out</th>
            <th className='w-1/7'>Work Schedule</th>
            <th className='w-1/7'>Logged Time</th>
            <th className='w-1/7'>Over Time</th>
            <th className='w-1/7 rounded-r-lg'>Deficit</th>
            
          </tr>
        </thead>

        <tbody>
          {newAllUserTabledata?.map((item) => (
            <tr key={item.id} className='text-center'>
            
              <td className='p-8 text-nowrap'>
               
                    <p className=''>{item?.date.split("T")[0]||'-'}</p> 
             
              </td>
              <td>{item?.checkin||"-"}</td>
              <td>{item?.checkout||'-'}</td>
              <td>{"9 Hours"}</td>
              <td>{
                loggedTime(item?.checkin,item?.checkout)
                }</td>
              <td>
                  {calculateOvertimeDeficit(item?.checkin, item?.checkout).overtime}
              </td>
              <td>
              {calculateOvertimeDeficit(item?.checkin, item?.checkout).deficit}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
