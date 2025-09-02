import { GalleryVerticalEnd } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function SignUpUpperPart() {
  return (
    <>
      <div className="flex justify-center item-center ">
        <Link to='/dashboard' className="flex items-center gap-2 font-medium">
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <GalleryVerticalEnd className="size-4" />
          </div>
          HR Dashboard
        </Link>
      </div>

    </>
  )
}
