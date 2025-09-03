import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { signOutUserSuccess } from "@/Redux/user/userSlice";
import { Button } from "./Common/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./Common/ui/dialog";

export function SessionConfirmButton() {
  const dispatch = useDispatch();
const [timer,setTimer]= useState(10);
  // store timeout ids here (React won't reset them on re-render)
  const inactivityTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const modalTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const countdownInterval = useRef<ReturnType<typeof setInterval> | null>(null);
  const [isModalActive, setIsModalActive] = useState(false);

  // restart the 15 min inactivity timer
  const resetInactivityTimer = () => {
    if (inactivityTimer.current) clearTimeout(inactivityTimer.current);

    inactivityTimer.current = setTimeout(() => {
      setIsModalActive(true); // show modal
    }, 15*60 *1000); // 15 min
  };
// when modal opens → start 10s timer
  useEffect(() => {
    if (isModalActive) {
        setTimer(10)
      modalTimer.current = setTimeout(() => {
        dispatch(signOutUserSuccess()); // auto logout
      }, 10 * 1000);
      countdownInterval.current = setInterval(() => {
        setTimer((prev)=>{
            if(prev>0)return prev-1
            return 0;
        })
      }, 1000);

    } else {
      if (modalTimer.current) clearTimeout(modalTimer.current);
      if(countdownInterval.current)clearInterval(countdownInterval.current)
    }
  }, [isModalActive, dispatch]);

  // set/reset inactivity timer when user interacts
  useEffect(() => {
    resetInactivityTimer();

    const events = ["mousemove", "keydown", "scroll", "click", "touchstart"];
    events.forEach((event) => window.addEventListener(event, resetInactivityTimer));

    return () => {
      if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
      if (modalTimer.current) clearTimeout(modalTimer.current);
      events.forEach((event) => window.removeEventListener(event, resetInactivityTimer));
    };
  }, []);

  return (
    <Dialog open={isModalActive} onOpenChange={setIsModalActive}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Session</DialogTitle>
          <DialogDescription>Want to stay logged in? {timer}s</DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose asChild>
            <Button
              variant="outline"
              onClick={() => dispatch(signOutUserSuccess())}
            >
              Logout
            </Button>
          </DialogClose>

          <DialogClose asChild>
            <Button
              onClick={() => {
                resetInactivityTimer(); // restart 15 min timer
              }}
            >
              Stay Logged In
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
