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


type GenderSelectProps={
    onChange?: (val: string) => void; 
    value:string
  }
export function GenderSelect({onChange,value}:GenderSelectProps) {
  return (
    <Select
    onValueChange={(val)=>{
        onChange(val)
      }}
      required
      value={value}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a Gender" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Gender</SelectLabel>
          <SelectItem value="male">Male</SelectItem>
          <SelectItem value="female">Female</SelectItem>
         </SelectGroup>
      </SelectContent>
    </Select>
  )
}
