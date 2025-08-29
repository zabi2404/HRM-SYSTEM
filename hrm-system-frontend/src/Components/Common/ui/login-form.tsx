import { cn } from "@/lib/utils"
import { Button } from "@/Components/Common/ui/button"
import { Input } from "@/Components/Common/ui/input"
import { Label } from "@/Components/Common/ui/label"
import { toast } from "sonner"
import { useNavigate } from "react-router-dom"
import { ReactFormState } from "react-dom/client"
import { useState } from "react"
import axios from "axios"

// redux
import { useDispatch, useSelector } from "react-redux";
import { signInSuccess } from '../../../Redux/user/userSlice'
import { Start, Success, failure } from '../../../Redux/user/loadingErrorSlice'



export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {

  // redux
  const { loading, error } = useSelector((state: any) => state.loadingError)
  const {user}=useSelector((state:any)=>state.user)
  const dispatch = useDispatch();

const navigate = useNavigate();

  // handling form data
  const [formData, setformData] = useState({});
  const HandleFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setformData(
      {
        ...formData,
        [e.target.type]: e.target.value
      }
    )
    console.log(formData)
  }

  // subbmitting form data and calling api
  const FormSubbmission = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(Start());

    axios.post('/api/auth/login', formData)
      .then((response) => {
        
const data = response.data;
console.log(data)
dispatch(signInSuccess(data))
        dispatch(Success())
        navigate("/dashboard")
      })
      .catch((err) => {
        if (err.response) {
          dispatch(failure(err.response.data.message))
         
          toast.error("Login failed", {
            description: err.response.data.message,
          });
        }
        dispatch(failure(err))
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
        <Button disabled={loading}  type="submit" className="w-full bg-white hover:opacity-80 text-black cursor-pointer disabled:opacity-80">
        {loading? "Loading...":"Login"}
        </Button>
      </div>

    </form>
  )
}
