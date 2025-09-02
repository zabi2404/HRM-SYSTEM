import * as React from "react"

import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-mobile"
import { Button } from "@/Components/Common/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/Common/ui/dialog"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/Components/Common/ui/drawer"
import { Input } from "@/Components/Common/ui/input"
import { Label } from "@/Components/Common/ui/label"
import { FaPlus } from "react-icons/fa6"
import axios from "axios"


// redux

import { useDispatch, UseDispatch, useSelector } from "react-redux"
import { Start, Success, failure } from '../../Redux/user/loadingErrorSlice'
import { toast } from "sonner"
import { SelectDemo } from "../../Components/LeaveSelectType"
import SelectDays from "@/Components/LeaveSelectDay"
import { Textarea } from "@/Components/Common/ui/textarea"
import { UseSelector } from "react-redux"
import { FaPen } from "react-icons/fa"

type EditLeavedialougeProps = {
    LeaveId: string
}

export function EditLeavedialouge({ LeaveId }: EditLeavedialougeProps) {
    const [open, setOpen] = React.useState(false)
    const isDesktop = useMediaQuery("(min-width: 768px)")







    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <div className="hover:bg-[#212121] cursor-pointer w-8 h-8 flex justify-center items-center rounded-full">
                        <FaPen className="cursor-pointer" />
                    </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[800px]">
                    <DialogHeader>
                        <DialogTitle>Add New Request For Leave</DialogTitle>
                        <DialogDescription>
                            Fill the following field to proceed leave request
                        </DialogDescription>
                    </DialogHeader>
                    <ProfileForm LeaveId={LeaveId} />
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button variant="outline" className="flex gap-3 cursor-pointer" ><FaPlus />New Request</Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="text-left">
                    <DrawerTitle>Add New Request For Leave</DrawerTitle>
                    <DrawerDescription>
                        Fill the following field to proceed leave request
                    </DrawerDescription>
                </DrawerHeader>
                <ProfileForm className="px-4" LeaveId={LeaveId} />
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
} 

function ProfileForm({ className, LeaveId }: React.ComponentProps<"form"> & { LeaveId: string }) {

const [formData, setFormData] = React.useState({
    // HANDLING FORM AND SUBBMISSION OF FORM
    leaveType: "",
    days: "single",
    from: "",
    to: "",
    description: "",
    file: null as File | null,
});

    React.useEffect(() => {

        axios.get(`/api/leave/get-leaveById/${LeaveId}`)
            .then((res) => {
                console.log(res.data)
                const data = res.data
                setFormData(
                    {
                        leaveType: data?.type||"",
                        days: data?.days||"single",
                        from: data?.start||"",
                        to: data?.end||"",
                        description: data?.description||"",
                        file: data?.file||null,
                    }
                )
            })
            .catch((err) => console.log(err))
    }, []);



    
    //redux
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state: any) => state.loadingError)





    const User = useSelector((state: any) => state.user.currentUser)
    const handleForm = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        


        setFormData({

            ...formData,
            [e.target.id]: e.target.value
        })
        console.log(formData)
    }

    const formSubbmission = (e: React.ChangeEvent<HTMLFormElement>) => {
        let payload = { ...formData };

      
        if (payload.days === "single") {
          payload.to = ""; 
        }
        e.preventDefault();
        console.log(formData)
        dispatch(Start())
        axios.post(`/api/leave/Employeeupdate-leave/${LeaveId}`, payload)
        .then((response) => {
            const data = response.data
            toast.success("Leave Updated Succesfully")
            dispatch(Success())
            })
            .catch((err) =>
                {toast.error("Error while Updating Leave")
            dispatch(Success())

                })
    }

    return (
        <form onSubmit={formSubbmission} className={cn("grid items-start gap-6", className)}>

            <div className="flex gap-4 w-full">
                <SelectDemo
                        value={formData?.leaveType}
                    onChange={(val: string) => {
                        setFormData({
                            ...formData,
                            'leaveType': val
                        })
                    }}

                />
                <SelectDays
                     value={formData.days}
                    onChange={(val: string) => {
                        setFormData({
                            ...formData,
                            'days': val,
                            to: val === "single" ? "" : formData.to,
                        })
                    }}
                />
            </div>


            <div className="flex gap-4 w-full">

                <div className="grid gap-3 w-full">
                    <Label htmlFor="from">From</Label>
                    <Input id="from"
                        type="date"
                        placeholder=""
                        className="flex justify-center"
                        value={formData.from}
                        onChange={handleForm}
                    />
                </div>

                {formData.days === "multiple" && <div className="grid gap-3 w-full">
                    <Label htmlFor="to">To</Label>
                    <Input id="to"
                        type="date"
                        placeholder=""
                        className="flex justify-center"
                        value={formData.to}
                        onChange={handleForm}
                    />
                </div>}
            </div>

            <div className="grid gap-3 w-full">
                <Label htmlFor="Description">Description </Label>
                <div className="max-h-[200px] overflow-auto customScroll">
                    <Textarea placeholder="Type your reason for leave."
                        id="description"
                        onChange={handleForm}
                        value={formData.description}
                    />
                </div>
            </div>



            <div className="grid gap-3 ">
                <Label htmlFor="file">Attachment</Label>
                <Input id="file"
                    type="file"
                    onChange={handleForm}
                    className="flex justify-center"
                />
            </div>
            <DialogTrigger asChild>
                <Button type="submit" className="cursor-pointer hover:opacity-80">Save changes</Button>
            </DialogTrigger >
        </form>
    )
}
