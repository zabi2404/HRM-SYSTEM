import SignUpForm from '@/Sections/Auth/SignUp/SignUpForm'
import SignUpUpperPart from '@/Sections/Auth/SignUp/SignUpUpperPart'

export default function SignUp() {
  return (
    <>
      <div className="flex flex-col gap-10  w-full items-center justify-center p-6 md:px-10 md:pt-0">

       <SignUpUpperPart/>
      <SignUpForm/>
      </div>
      
    </>
  )
}
