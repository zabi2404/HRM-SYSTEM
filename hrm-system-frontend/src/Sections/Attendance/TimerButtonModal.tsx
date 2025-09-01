import { useState } from 'react'
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
import { ChangeAttendance } from '@/Redux/attendance/attendanceSlice'
type TimerButtonModalProps = {
  isOpen: boolean;
  onClose: () => void;
}

export function TimerButtonModal({ isOpen, onClose }: TimerButtonModalProps) {
  const dispatch = useDispatch();
  const attendance = useSelector((state: any) => state.attendance.Attendance);
  const user = useSelector((state: any) => state.user.currentUser);


  const ClockIn = () => {
    axios.post(`api/attendance/create-attendance`, {
      employeeId: user.employeeId,
      checkin: new Date().toLocaleTimeString(),
    })
      .then((res) => {
        console.log(res.data);
        dispatch(ChangeAttendance());
      })
      .then((err) => { console.log(err) })
  }

  const ClockOut = () => {
   axios.post
  }





  const [time, setTime] = useState("");
  // clock
  const currentTime = () => {
    const time = new Date().toLocaleTimeString();

    setTime(time);
  }
  setInterval(currentTime, 1000);

  if (!isOpen) { return null }


  return (


    <Dialog open={isOpen} onOpenChange={onClose}>



      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Clock In at {time}</DialogTitle>

        </DialogHeader>

        <DialogFooter className='flex !justify-center items-center'>
          <DialogClose asChild>
            <Button variant="outline" onClick={onClose}>
              Cancel</Button>
          </DialogClose>
          {!attendance ?

            <DialogClose asChild>
              <Button onClick={ClockIn} className='cursor-pointer'>
                Clock In</Button>
            </DialogClose>
            :
            <DialogClose asChild>
              <Button onClick={ClockOut} >
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