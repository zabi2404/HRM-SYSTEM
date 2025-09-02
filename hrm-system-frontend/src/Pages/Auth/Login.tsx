
import { Loader2 } from "lucide-react";
import React, { Suspense, lazy } from "react";

const ImageSection = lazy(() => import("@/Sections/Auth/Login/ImageSection"));
const LoginTo = lazy(() => import("@/Sections/Auth/Login/LoginTo"));

export default function Login() {
  return (

    <Suspense fallback={<Loader2/>}>

    <div className="grid min-h-svh lg:grid-cols-2 p-4">
      <LoginTo />
      <ImageSection />
    </div>
    </Suspense>


  )
}
