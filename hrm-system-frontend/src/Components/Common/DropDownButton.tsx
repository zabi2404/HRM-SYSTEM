
import { FaChevronDown } from "react-icons/fa";
import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

import { Button } from "@/Components/Common/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/Components/Common/ui/dropdown-menu"

type Checked = DropdownMenuCheckboxItemProps["checked"]

export function DropDownButton() {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
  const [showPanel, setShowPanel] = React.useState<Checked>(false)

  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild>
        <Button className="px-8 py-6 flex gap-7 " variant="outline">
         <p>All Jobs</p>   <FaChevronDown />

        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">

       
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          Status Bar
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem
          checked={showActivityBar}
          onCheckedChange={setShowActivityBar}
      
        >
          Activity Bar
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem
          checked={showPanel}
          onCheckedChange={setShowPanel}
        >
          Panel
        </DropdownMenuCheckboxItem>

      </DropdownMenuContent>
    </DropdownMenu>
  )
}
