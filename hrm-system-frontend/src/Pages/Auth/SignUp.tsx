import { GalleryVerticalEnd } from 'lucide-react'
import { LoginForm } from '../../Components/signup-form'
import React from 'react'

export default function SignUp() {
  return (
    <>
      <div className="flex flex-col gap-10  w-full items-center justify-center p-6 md:px-10 md:pt-0">
      <div className="flex justify-center item-center ">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            HR Dashboard
          </a>
        </div>
        
        
        <div className="w-full max-w-sm">
          <LoginForm />
        </div>
      </div>
    </>
  )
}
