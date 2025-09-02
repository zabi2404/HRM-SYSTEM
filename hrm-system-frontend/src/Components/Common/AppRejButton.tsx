import { MdDelete } from "react-icons/md"
import { Button } from "../Common/ui/button"
import { RiErrorWarningLine } from "react-icons/ri";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../Common/ui/dialog"
import { Input } from "../Common/ui/input"
import { Label } from "../Common/ui/label"
import axios from "axios";
import { toast } from "sonner";
import { Badge } from '@/Components/Common/badge';
import { useDispatch, useSelector } from "react-redux"
import { Start, Success } from '../../Redux/user/loadingErrorSlice'
type ConfirmButtonProps = {
    LeaveId?: Number
}

export function AppRejButton({ LeaveId }: ConfirmButtonProps) {
    
    const dispatch = useDispatch();
    const Approved = () => {
        
        dispatch(Start())
        axios.post(`/api/leave/update-leave/${LeaveId}`,{status:"approved"})
        .then((Response) => {
            toast.success('Leave Marked as Approved')
            dispatch(Success())
            })
            .catch((err) => {toast.error('Something went wrong')
            dispatch(Success())
            }
            )
    }
const Rejected=()=>{
    console.log("Rejected");
    axios.post(`/api/leave/update-leave/${LeaveId}`,{status:"rejected"})
    .then((Response) => {
        toast.success('Leave Marked as Rejected')
    })
    .catch((err) => toast.error('Something went wrong')
    )
}

    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>

                    <div className="hover:bg-[#212121] cursor-pointer w-8 h-8  rounded-full">

                    <Badge className=" px-4 py-2 ">{'pending'}</Badge>
                    </div>

                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader >
                        <DialogTitle className="flex justify-center">Leave Approval</DialogTitle>
                        <DialogDescription className="flex flex-col items-center gap-2">
                            
                                After Approval it can't be reverted
                                {/* <span className="flex items-center justify-center gap-1 text-[10px]">
                                <RiErrorWarningLine />
                                By deleting employee acc the User acc will also be deleted
                            </span> */}
                           
                        </DialogDescription>
                    </DialogHeader>

                    <DialogFooter className="flex xsm:!justify-center ">
                        <DialogClose asChild>
                            <Button onClick={Rejected} variant="outline" className="cursor-pointer min-w-[100px]">Reject</Button>
                        </DialogClose >
                        <DialogClose asChild>
                            <Button onClick={Approved} className="cursor-pointer hover:opacity-70">Approved</Button>
                        </DialogClose >
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}
