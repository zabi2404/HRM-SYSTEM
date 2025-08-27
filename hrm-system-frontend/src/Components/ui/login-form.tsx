import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ReactFormState } from "react-dom/client"
import { useState } from "react"
import axios from "axios"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {


  const [formData, setformData] = useState({});
const HandleFormData = (e:React.ChangeEvent<HTMLInputElement>)=>{
setformData(
{  ...formData,
  [e.target.type]:e.target.value}
)
console.log(formData)
}
const FormSubbmission = (e:React.ChangeEvent<HTMLFormElement>)=>{
e.preventDefault();

axios.post('/api/auth/login',formData)
.then((response)=>{
  console.log(response.data);
})
.catch((err)=>{
  if(err.response){
    console.log("backend Error",err.response.data.message)
  }
  console.log(err)
})

console.log("form subbmitted")
}


  return (
    <form onSubmit={FormSubbmission} className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com"
          onChange={HandleFormData}
          required />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <Input id="password" type="password" required 
           onChange={HandleFormData}
          />
        </div>
        <Button type="submit" className="w-full bg-white hover:opacity-80 text-black cursor-pointer">
          Login
        </Button>


      </div>

    </form>
  )
}
