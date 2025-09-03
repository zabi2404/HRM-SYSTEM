import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { signOutUserSuccess } from "@/Redux/user/userSlice";

export default function SessionHandler() {
    const dispatch = useDispatch();
    const hiddenTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const logout = () => {
        
        dispatch(signOutUserSuccess());
        localStorage.removeItem("lastActive");
    };

    useEffect(() => {
       
        const handleVisibilityChange = () => {
            if (document.hidden) {
                localStorage.setItem("lastActive", Date.now().toString());
                hiddenTimer.current = setTimeout(() => {
                    logout();
                }, 2 * 60 * 60 * 1000); 
            } else {
                const lastActive = localStorage.getItem("lastActive");
                if (lastActive) {
                    const diff = Date.now() - parseInt(lastActive, 10);
                    if (diff >= 2 * 60 * 60 * 1000) {
                        logout(); 
                    }
                }
                if (hiddenTimer.current) clearTimeout(hiddenTimer.current);
                localStorage.removeItem("lastActive");
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);

       
        const handleBeforeUnload = () => {
            localStorage.setItem("lastActive", Date.now().toString());
        };
        window.addEventListener("beforeunload", handleBeforeUnload);

        const lastActive = localStorage.getItem("lastActive");
        if (lastActive) {
            const diff = Date.now() - parseInt(lastActive, 10);
            if (diff >= 2 * 60 * 60 * 1000) {
                logout();
            }
        }

        return () => {
            if (hiddenTimer.current) clearTimeout(hiddenTimer.current);
            document.removeEventListener("visibilitychange", handleVisibilityChange);
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, []);

    return null;
}
