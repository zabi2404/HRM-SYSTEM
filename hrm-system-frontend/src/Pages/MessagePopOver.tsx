import { LuMessageSquareText } from "react-icons/lu"
import { Button } from "../Components/Common/ui/button"
import { Input } from "../Components/Common/ui/input"
import { Label } from "../Components/Common/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/Components/Common/ui/popover"

export function MessagePopOver() {
  return (
    <Popover >
      <PopoverTrigger asChild>
        <LuMessageSquareText className='w-5 h-5 cursor-pointer'  
             
                 />
      </PopoverTrigger>
      <PopoverContent className="w-80">

        <div className="grid gap-4 max-h-[220px] overflow-auto customScroll">
          <div className="space-y-2 pb-4 border-b">
            <h4 className="leading-none font-medium">Dimensions</h4>
            <p className="text-muted-foreground text-sm">
              Set the dimensions for the layer.
            </p>
          </div>

          <div className="space-y-2 pb-4 border-b">
            <h4 className="leading-none font-medium">Dimensions</h4>
            <p className="text-muted-foreground text-sm">
              Set the dimensions for the layer.
            </p>
          </div>

          <div className="space-y-2 pb-4 border-b">
            <h4 className="leading-none font-medium">Dimensions</h4>
            <p className="text-muted-foreground text-sm">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="space-y-2 pb-4 border-b">
            <h4 className="leading-none font-medium">Dimensions</h4>
            <p className="text-muted-foreground text-sm">
              Set the dimensions for the layer.
            </p>
          </div>
          


        
        </div>
      </PopoverContent>


    </Popover>
  )
}
