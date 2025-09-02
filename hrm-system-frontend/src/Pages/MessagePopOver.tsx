import { LuMessageSquareText } from "react-icons/lu"
import { Button } from "../Components/Common/ui/button"
import { Input } from "../Components/Common/ui/input"
import { Label } from "../Components/Common/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/Components/Common/ui/popover"




import { getMessage } from '@/Redux/Message/messageSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react"
import axios from "axios"

export function MessagePopOver() {

  const dispatch = useDispatch();
  const messageObject = useSelector((state:any)=>state.Message.messageObject)
  const { loading } = useSelector((state: any) => state.loadingError)
  useEffect(() => {
  
    axios.get('/api/message/get-messages')
    .then((response)=>{
     console.log('server response : ',response.data)
      const data = response.data;

     dispatch(getMessage(data))
   
    })
    .catch((err)=>{
     console.log(err)
    })
   }, [loading]);

  
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
