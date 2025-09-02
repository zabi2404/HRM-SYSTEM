

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./Common/ui/select"

type SelectDemoProps={
  onChange?: (val: string) => void; 
  value:string;
}
export function SelectDemo({onChange,value}:SelectDemoProps) {

  return (
    <Select
  onValueChange={(val)=>{
    console.log("from select",val)
    onChange(val)
  }}
  value={value}
  required
    >
     
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Type" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Types</SelectLabel>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="Sick">Sick</SelectItem>
          <SelectItem value="other">other</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
