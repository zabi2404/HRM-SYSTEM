import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

export default function GrowthButton(props) {
  
  const isGrowthUp = props.isGrowthUp;
    return (

<>

<div className={`flex items-center ml-2 rounded-[4px] p-0.5
  ${isGrowthUp ? 'bg-[#05C16833]' : 'bg-[#FF5A6533]'}`} >
<p className={` text-[10px] ${isGrowthUp ? 'text-[#14CA74]' : 'text-[#FF5A65] '}`}>{props.growth}</p>
<GoArrowUpRight className={`${isGrowthUp ? 'text-[#14CA74]' :'text-[#FF5A65] rotate-90' }`} />
</div>
</>
  )
}
