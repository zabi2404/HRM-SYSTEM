import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

type SearchInputProps={
placeholder?:string
}

export default function SearchInput({placeholder}:SearchInputProps) {
  
const navigate = useNavigate();
  const [search,setSearch]=useState("")
  const HandleIput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    // update the url
    const urlParams = new URLSearchParams(location.search);
    if (value) {
      urlParams.set("searchTerm", value);
    } else {
      urlParams.delete("searchTerm"); // remove if empty
    }
    navigate(`${location.pathname}?${urlParams.toString()}`, { replace: true });
  }
  
  return (
    <div className="flex items-center bg-[#212121] border border-[#424242] rounded-[8px] w-full px-2">
<CiSearch className="w-5 h-5" />
   <input type="text"
   placeholder={placeholder ||"Search anything..."}
   className="p-3 px-6 bg-[#212121] outline-0 w-full "
    value={search}
    onChange={HandleIput}
   />
    </div>
  );
}




// // getting the url 
// urlParams.set('searchTerm', search);  // inserting string into queryparam searchTerm
// const searchQuery = urlParams.toString(); // getting back the url and converting into string  
// navigate(`/search?${searchQuery}`) //. navigate to that specific url