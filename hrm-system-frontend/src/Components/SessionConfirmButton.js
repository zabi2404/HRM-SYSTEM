import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { signOutUserSuccess } from "@/Redux/user/userSlice";
import { Button } from "./Common/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, } from "./Common/ui/dialog";
export function SessionConfirmButton() {
    const dispatch = useDispatch();
    const [timer, setTimer] = useState(10);
    // store timeout ids here (React won't reset them on re-render)
    const inactivityTimer = useRef(null);
    const modalTimer = useRef(null);
    const countdownInterval = useRef(null);
    const [isModalActive, setIsModalActive] = useState(false);
    // restart the 15 min inactivity timer
    const resetInactivityTimer = () => {
        if (inactivityTimer.current)
            clearTimeout(inactivityTimer.current);
        inactivityTimer.current = setTimeout(() => {
            setIsModalActive(true); // show modal
        }, 15 * 60 * 1000); // 15 min
    };
    // when modal opens → start 10s timer
    useEffect(() => {
        if (isModalActive) {
            setTimer(10);
            modalTimer.current = setTimeout(() => {
                dispatch(signOutUserSuccess()); // auto logout
            }, 10 * 1000);
            countdownInterval.current = setInterval(() => {
                setTimer((prev) => {
                    if (prev > 0)
                        return prev - 1;
                    return 0;
                });
            }, 1000);
        }
        else {
            if (modalTimer.current)
                clearTimeout(modalTimer.current);
            if (countdownInterval.current)
                clearInterval(countdownInterval.current);
        }
    }, [isModalActive, dispatch]);
    // set/reset inactivity timer when user interacts
    useEffect(() => {
        resetInactivityTimer();
        const events = ["mousemove", "keydown", "scroll", "click", "touchstart"];
        events.forEach((event) => window.addEventListener(event, resetInactivityTimer));
        return () => {
            if (inactivityTimer.current)
                clearTimeout(inactivityTimer.current);
            if (modalTimer.current)
                clearTimeout(modalTimer.current);
            events.forEach((event) => window.removeEventListener(event, resetInactivityTimer));
        };
    }, []);
    return (_jsx(Dialog, { open: isModalActive, onOpenChange: setIsModalActive, children: _jsxs(DialogContent, { children: [_jsxs(DialogHeader, { children: [_jsx(DialogTitle, { children: "Session" }), _jsxs(DialogDescription, { children: ["Want to stay logged in? ", timer, "s"] })] }), _jsxs(DialogFooter, { children: [_jsx(DialogClose, { asChild: true, children: _jsx(Button, { variant: "outline", onClick: () => dispatch(signOutUserSuccess()), children: "Logout" }) }), _jsx(DialogClose, { asChild: true, children: _jsx(Button, { onClick: () => {
                                    resetInactivityTimer(); // restart 15 min timer
                                }, children: "Stay Logged In" }) })] })] }) }));
}
