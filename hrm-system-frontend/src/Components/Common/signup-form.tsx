import { cn } from "@/lib/utils"
import { Button } from "@/Components/Common/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/Common/ui/card"
import { Input } from "@/Components/Common/ui/input"
import { Label } from "@/Components/Common/ui/label"
import { RadioGroup, RadioGroupItem } from "@/Components/Common/ui/radio-group"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

// redux
import { useDispatch,useSelector } from "react-redux"
import {Start,Success,failure} from '../../Redux/user/loadingErrorSlice'
import { toast } from "sonner"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

  
  const [formData, setformData] = useState({
    username:'',
    email:'',
    password:'',
  role:'employee'
  });

  const navigate = useNavigate()
  const dispatch = useDispatch();
  const {loading,error}=useSelector((state:any)=>state.loadingError)

  const HandleChanges = (e: React.ChangeEvent<HTMLInputElement> | string) => {
    if (typeof e === "string") {
      // RadioGroup
      setformData((prev) => ({ ...prev, role: e }))
    } else {
      // Normal inputs
      const { id, value } = e.target
      setformData((prev) => ({ ...prev, [id]: value }))
    }

    console.log(formData)
  }

  const formSubbmission = (e:React.ChangeEvent<HTMLFormElement>)=>{

    e.preventDefault();
    dispatch(Start())
    axios.post("/api/auth/signup",formData)
    .then((response)=>{
      console.log(response.data);
      dispatch(Success())
      toast.success("User Created Successfully"
      );
      navigate('/employee')
    })
    .catch((error)=>{
      if(error.response){
        dispatch(failure(error.response?.data?.message || error.message));
        toast.error("failed", {
          description: error||'internal error',
        });
      }
      console.log(error)

    })
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Create a new User</CardTitle>
          <CardDescription>
            Fill the below fields to create user
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={formSubbmission}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="Username">Username</Label>
                <Input
                  id="username"
                  type="username"
                  placeholder="username"
                  value={formData.username}
                  required
                  onChange={HandleChanges}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={formData.email}
                  onChange={HandleChanges}
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>

                </div>
                <Input id="password" type="password" required 
                value={formData.password}
                onChange={HandleChanges}
                />
              </div>

              <div className="flex justify-center items-center">

              <RadioGroup
                    value={formData.role}
                    onValueChange={HandleChanges}
              className="flex items-center" >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem className="cursor-pointer"  value="employee" id="r1" />
                  <Label htmlFor="r1">Employee</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem className="cursor-pointer" value="hr" id="r2" />
                  <Label htmlFor="r2">Hr</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem className="cursor-pointer" value="admin" id="r3" />
                  <Label htmlFor="r3">Admin</Label>
                </div>
              </RadioGroup>
              </div>

              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full cursor-pointer">
                  Create Account
                </Button>
              </div>
            </div>

          </form>
        </CardContent>
      </Card>
    </div>
  )
}
