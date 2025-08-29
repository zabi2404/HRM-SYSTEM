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
import { Start, Success, failure } from '../../../Redux/user/loadingErrorSlice'
import { toast } from "sonner"
import { SelectDemo } from "../../LeaveSelectType"
import SelectDays from "@/Components/LeaveSelectDay"
import { Textarea } from "@/Components/Common/ui/textarea"
import { UseSelector } from "react-redux"

export function AddNewReq() {
    const [open, setOpen] = React.useState(false)
    const isDesktop = useMediaQuery("(min-width: 768px)")







    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button className="flex gap-3 cursor-pointer
          "><FaPlus /> New Request </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[800px]">
                    <DialogHeader>
                        <DialogTitle>Add New Request For Leave</DialogTitle>
                        <DialogDescription>
                            Fill the following field to proceed leave request
                        </DialogDescription>
                    </DialogHeader>
                    <ProfileForm />
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
                <ProfileForm className="px-4" />
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

function ProfileForm({ className }: React.ComponentProps<"form">) {


    //redux
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state: any) => state.loadingError)

    // HANDLING FORM AND SUBBMISSION OF FORM
    const [formData, setFormData] = React.useState({
        leaveType: "",
        days: "single",
        from: "",
        to: "",
        description: "",
        file: null as File | null,
    });



    const User = useSelector((state: any) => state.user.currentUser)
    const handleForm = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({

            ...formData,
            [e.target.id]: e.target.value
        })
        console.log(formData)
    }

    const formSubbmission = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        axios.post(`/api/leave/create-leave/${User.employeeId}`,formData)
            .then((response) => {
                const data = response.data
                toast.success(data)
            })
            .catch((err) =>
                toast.error(err.response.data.message))
    }

    return (
        <form onSubmit={formSubbmission} className={cn("grid items-start gap-6", className)}>

            <div className="flex gap-4 w-full">
                <SelectDemo
                    onChange={(val: string) => {
                        setFormData({
                            ...formData,
                            'leaveType': val
                        })
                    }}

                />
                <SelectDays
                    onChange={(val: string) => {
                        setFormData({
                            ...formData,
                            'days': val
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
                        onChange={handleForm}
                    />
                </div>

                {formData.days === "multiple" && <div className="grid gap-3 w-full">
                    <Label htmlFor="to">To</Label>
                    <Input id="to"
                        type="date"
                        placeholder=""
                        className="flex justify-center"
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

            <Button type="submit" className="cursor-pointer hover:opacity-80">Save changes</Button>
        </form>
    )
}
