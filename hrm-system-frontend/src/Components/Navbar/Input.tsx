import { CiSearch } from "react-icons/ci";

export default function SearchInput() {
  return (
    <div className="flex items-center bg-[#212121] border border-[#424242] rounded-[8px] w-full px-2">
<CiSearch className="w-5 h-5" />
   <input type="text"
   placeholder="Search anything..."
   className="p-3 px-6 bg-[#212121] outline-0 "
   />
    </div>
  );
}
