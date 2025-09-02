import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./Common/ui/select"


type SelectDaysprops = {
  value:string,
onChange?: (val: string) => void; 

}

export default function SelectDays({onChange,value}) {
    console.log(value)
  return (
    <Select
    onValueChange={(val)=>{
        onChange(val)
      }}
      required
      value={value}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Days" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Days</SelectLabel>
          <SelectItem value="single">single</SelectItem>
          <SelectItem value="multiple">multiple</SelectItem>
        </SelectGroup>
      </SelectContent> 
    </Select>
  )
}
