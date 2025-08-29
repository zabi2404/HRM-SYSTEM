

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
}
export function SelectDemo({onChange}:SelectDemoProps) {

  return (
    <Select
  onValueChange={(val)=>{
    onChange(val)
  }}
  required
    >
     
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Type" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Types</SelectLabel>
          <SelectItem value="Sick">Sick</SelectItem>
          <SelectItem value="other">other</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
