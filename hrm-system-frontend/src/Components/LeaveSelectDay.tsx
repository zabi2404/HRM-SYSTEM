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




export default function SelectDays({onChange}) {
    
  return (
    <Select
    onValueChange={(val)=>{
        onChange(val)
      }}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Days" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Days</SelectLabel>
          <SelectItem value="single">Single</SelectItem>
          <SelectItem value="multiple">Multiple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
