

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../Components/Common/ui/select"

export function SelectMonth() {

  return (
    <Select

    >
     
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Month" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Previous Month</SelectLabel>
          <SelectItem value="1">1 Month</SelectItem>
          <SelectItem value="2"> 2 Month</SelectItem>
          <SelectItem value="3"> 3 Month</SelectItem>
          <SelectItem value="6"> 6 Month</SelectItem>

        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
