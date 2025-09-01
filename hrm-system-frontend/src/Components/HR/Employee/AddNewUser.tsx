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
import { useNavigate } from "react-router-dom"

export function AddNewUser() {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")







  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button  className="flex gap-3 cursor-pointer
          "><FaPlus /> Add New</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[800px]">
          <DialogHeader>
            <DialogTitle>Create New User</DialogTitle>
            <DialogDescription>
              Fill the following field to create new user
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
          <DrawerTitle>Create New User</DrawerTitle>
          <DrawerDescription>
            Fill the following field to create new user
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
  })

const navigate = useNavigate();

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {

    setFormData({

      ...formData,
      [e.target.id]: e.target.value
    })
    console.log(formData)
  }

  const formSubbmission = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(Start());
    axios.post('/api/employee/createEmployee', formData)
      .then((response) => {
        toast.success("User Created Successfully");
        dispatch(Success())
        const data = response.data;
        console.log(data)
         console.log(data.user_Ref._id)
        navigate(`/profile/${data._id}`)
      })
      
      .catch((error) => {
        toast.error(error.response.data.message)
          console.log(error)
    
  })

}


return (
  <form onSubmit={formSubbmission} className={cn("grid items-start gap-6", className)}>

    <div className="grid gap-3">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email"
        placeholder="@example.com"
        onChange={handleForm}
        required
      />
    </div>
    <div className="flex gap-4 w-full">

      <div className="grid gap-3 w-full">
        <Label htmlFor="job_title">Job title</Label>
        <Input id="job_title"
          placeholder="Job title"
          onChange={handleForm}
          required
        />
      </div>
      <div className="grid gap-3 w-full">
        <Label htmlFor="department">Department</Label>
        <Input id="department"
          placeholder="Department"
          onChange={handleForm}
          required
        />
      </div>
    </div>
    <div className="flex gap-4 w-full">

      <div className="grid gap-3 w-full">
        <Label htmlFor="salery">Salery</Label>
        <Input id="salery" type="number"
          placeholder="Salery in Pkr"
          onChange={handleForm}
          required
        />
      </div>
      <div className="grid gap-3 w-full ">
        <Label htmlFor="contact_Number">Contact Number</Label>
        <Input id="contact_number"
          placeholder="Contact Number"
          onChange={handleForm}
          type="number"
          min={11}
          required
        />
      </div>
      <div className="grid gap-3 w-full">
        <Label htmlFor="address">Address</Label>
        <Input id="address"
          placeholder="Address"
          onChange={handleForm}
          required
        />
      </div>
    </div>
    <div className="flex gap-4 w-full">

      <div className="grid gap-3 w-full">
        <Label htmlFor="joining_date">Joining Date</Label>
        <Input id="joining_Date" type="Date"
          className="flex justify-center"
          onChange={handleForm}
        />
      </div>
      <div className="grid gap-3 w-full">
        <Label htmlFor="emplopyee Code">Emplopyee Code</Label>
        <Input id="emplopyee Code"
          defaultValue="EMP010"
          disabled />
      </div>
    </div>
    <Button type="submit" className="cursor-pointer hover:opacity-80">Save changes</Button>
  </form>
)
}
