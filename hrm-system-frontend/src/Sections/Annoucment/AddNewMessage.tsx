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
import {getMessage} from'../../Redux/Message/messageSlice'
import { toast } from "sonner"
import { Textarea } from "@/Components/Common/ui/textarea"
import { useNavigate } from 'react-router-dom';


export function AddNewMessage() {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

 






  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button  className="flex gap-3 cursor-pointer
          "><FaPlus /> Add New Message</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[800px]">
          <DialogHeader>
            <DialogTitle>Create New Message</DialogTitle>
            <DialogDescription>
              Fill the following field to create new Message
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
        <Button variant="outline" className="flex gap-3 cursor-pointer" ><FaPlus /> Add New</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Add New Message</DrawerTitle>
          <DrawerDescription>
          Fill the following field to create new Message
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline" className="cursor-pointer">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
  const naviagte = useNavigate()

  //redux
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state: any) => state.loadingError);


  // HANDLING FORM AND SUBBMISSION OF FORM
  const [formData, setFormData] = React.useState({
  })



  const handleForm = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

    setFormData({

      ...formData,
      [e.target.id]: e.target.value
    })
    console.log(formData)
  }

  const formSubbmission = (e: React.ChangeEvent<HTMLFormElement >) => {
    e.preventDefault();
    dispatch(Start());
    axios.post('/api/message/create-message', formData)
      .then((response) => {
        toast.success("Message Published Successfully");
       
        dispatch(Success())
        
      })
      .catch((error) => {
          console.log(error.response.data.message)
    
  })

}


return (
  <form onSubmit={formSubbmission} className={cn("grid items-start gap-6", className)}>

    <div className="grid gap-3">
      <Label htmlFor="text">Title</Label>
      <Input type="text" id="title"
        placeholder="Enter Title"
        onChange={handleForm}
      />
    </div>
    <div className="grid gap-3">
      <div className="grid gap-3 w-full">
        <Label htmlFor="department">Message</Label>
        <div className="max-h-[300px] overflow-auto customScroll">

        <Textarea placeholder="Type your message here."
        id="message"
        onChange={handleForm}
        />
        </div>
      </div>
    </div>
   
    <Button type="submit" className="cursor-pointer hover:opacity-80">Publish</Button>
  </form>
)
}
