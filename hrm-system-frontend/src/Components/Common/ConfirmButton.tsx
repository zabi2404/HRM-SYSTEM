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
import { useDispatch, useSelector } from "react-redux"
import { Start, Success } from '../../Redux/user/loadingErrorSlice'

type ConfirmButtonProps = {
    empID?: Number
}

export function ConfirmButton({ empID }: ConfirmButtonProps) {
    
    const dispatch = useDispatch();
    const HandleSubmit = () => {
        console.log("Button Clicked");
        dispatch(Start())
        axios.delete(`/api/employee/delete-employee/${empID}`)
        .then((Response) => {
            toast.success(Response.data.message)
            dispatch(Success())
        })
        .catch((err) => {toast.error(err.message)
        dispatch(Success())
    }
            )
    }


    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>

                    <div className="hover:bg-[#212121] cursor-pointer w-8 h-8 flex justify-center items-center rounded-full">

                        <MdDelete className="cursor-pointer " />
                    </div>

                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader >
                        <DialogTitle className="flex justify-center">Confirm</DialogTitle>
                        <DialogDescription className="flex flex-col items-center gap-2">
                            
                                Are you sure you want to delete this employee ?
                                {/* <span className="flex items-center justify-center gap-1 text-[10px]">
                                <RiErrorWarningLine />
                                By deleting employee acc the User acc will also be deleted
                            </span> */}
                           
                        </DialogDescription>
                    </DialogHeader>

                    <DialogFooter className="flex xsm:!justify-center ">
                        <DialogClose asChild>
                            <Button variant="outline" className="cursor-pointer ">Cancel</Button>
                        </DialogClose >
                        <DialogClose asChild>
                            <Button onClick={HandleSubmit} className="cursor-pointer hover:opacity-70">Confirm</Button>
                        </DialogClose >
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}
