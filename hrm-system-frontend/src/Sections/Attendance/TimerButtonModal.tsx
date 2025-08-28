import { Button } from '../../Components/Common/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../Components/Common/ui/dialog"
import { Input } from "../../Components/Common/ui/input"
import { Label } from "../../Components/Common/ui/label"

type TimerButtonModalProps = {
    isOpen: boolean;               
    onClose: () => void;           
  }

export function TimerButtonModal({isOpen,onClose}:TimerButtonModalProps) {
    if(!isOpen){return null}
  return (

    
    <Dialog open={isOpen} onOpenChange={onClose}>
      
        
        <DialogContent  className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Clock Out at 8:00:00</DialogTitle>
            <DialogDescription>
             Your total working time for today is 8:00:00
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Notes</Label>
              <Input id="name-1" name="name" 
              placeholder='Input notes here' />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
            <Button variant="outline" onClick={onClose}>
              Cancel</Button>
            </DialogClose>
            <Button type="submit">Clock Out</Button>
          </DialogFooter>
        </DialogContent>
      
    </Dialog>
  )
}
