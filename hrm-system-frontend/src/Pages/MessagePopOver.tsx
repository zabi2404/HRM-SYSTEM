import { LuMessageSquareText } from "react-icons/lu"
import { Button } from "../Components/Common/ui/button"
import { Input } from "../Components/Common/ui/input"
import { Label } from "../Components/Common/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/Components/Common/ui/popover"

import { useSelector } from 'react-redux';

export function MessagePopOver() {
  const messageObject = useSelector((state:any)=>state.Message.messageObject)
  return (
    <Popover >
      <PopoverTrigger asChild>
        <LuMessageSquareText className='w-5 h-5 cursor-pointer'  
             
                 />
      </PopoverTrigger>
      <PopoverContent className="w-80">

        

        <div className="grid gap-4 max-h-[220px] overflow-auto customScroll">
{messageObject.map((item)=>
         <div className="space-y-2 pb-4 border-b">
            <h4 className="leading-none font-medium">{item.title}</h4>
            <p className="text-muted-foreground text-smv truncate h-7 w-[200px]">
             {item.message}
            </p>
          </div>
      )
        
        }

         

        
          


        
        </div>
      </PopoverContent>


    </Popover>
  )
}
