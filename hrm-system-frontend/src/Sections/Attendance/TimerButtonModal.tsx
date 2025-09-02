import { useEffect, useState } from 'react'
import { Button } from '../../Components/Common/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../Components/Common/ui/dialog"
import { Input } from "../../Components/Common/ui/input"
import { Label } from "../../Components/Common/ui/label"
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { ClockIn,ClockOut } from '@/Redux/attendance/attendanceSlice'
import { toast } from 'sonner'
type TimerButtonModalProps = {
  isOpen: boolean;
  onClose: () => void;
}

export function TimerButtonModal({ isOpen, onClose }: TimerButtonModalProps) {
  const dispatch = useDispatch();
  const attendance = useSelector((state: any) => state.attendance.Attendance);
  const user = useSelector((state: any) => state.user.currentUser);


  const handleClockIn = () => {
    axios.post(`/api/attendance/create-attendance`, {
      employeeId: user.employeeId,
      checkin: new Date().toLocaleTimeString(),
    })
      .then((res) => {
        console.log(res.data);
        toast.success("Clock in successfully");
        dispatch(ClockIn());
      })
      .catch((err) => { console.log(err) })
  }


  const handleClockOut = () => {
   axios.post(`/api/attendance/update-attendance`, {
    employeeId: user.employeeId,
    checkout: new Date().toLocaleTimeString(),
    
   })
   .then((response)=>{
   toast.success('Clock out successfully');
   dispatch(ClockOut());
   })
   .catch((error)=>{
    toast.error('Error in clock out');
    console.log(error.message)
   })
  }





  const [time, setTime] = useState("");
  // clock
  const currentTime = () => {
    const time = new Date().toLocaleTimeString();

    setTime(time);
  }
  setInterval(currentTime, 1000);

  const [canClockOut, setCanClockOut] = useState(false);
  useEffect(() => {
    const checkTime = () => {
      const now = new Date();
      const hours = now.getHours();

      // if current time is 0:00 (midnight) or later
      if (hours >= 0) {
        setCanClockOut(true);
      }
    };

    checkTime();
    const interval = setInterval(checkTime, 60000); // check every minute
    return () => clearInterval(interval);
  }, []);


  if (!isOpen) { return null }






  return (


    <Dialog open={isOpen} onOpenChange={onClose}>



      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Clock {attendance?"Out":"In"} at {time}</DialogTitle>

        </DialogHeader>

        <DialogFooter className='flex !justify-center items-center'>
          <DialogClose asChild>
            <Button variant="outline" onClick={onClose}>
              Cancel</Button>
          </DialogClose>
          {!attendance ?

            <DialogClose asChild>
              <Button disabled={canClockOut} onClick={handleClockIn} className='cursor-pointer'>
                Clock In</Button>
            </DialogClose>
            :
            <DialogClose asChild>
              <Button  onClick={handleClockOut} className='cursor-pointer'>
                Clock Out</Button>
            </DialogClose>
          }





        </DialogFooter>
      </DialogContent>

    </Dialog>
  )
}



// when user click on clock in button the new attendance created and the again buton of creating new attendance shown after the 12 
// until the close button will  shown and when close button also clicked the button will be disable for the next day