import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
export default function SearchInput({ placeholder }) {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const HandleIput = (e) => {
        const value = e.target.value;
        setSearch(value);
        // update the url
        const urlParams = new URLSearchParams(location.search);
        if (value) {
            urlParams.set("searchTerm", value);
        }
        else {
            urlParams.delete("searchTerm"); // remove if empty
        }
        navigate(`${location.pathname}?${urlParams.toString()}`, { replace: true });
    };
    return (_jsxs("div", { className: "flex items-center bg-[#212121] border border-[#424242] rounded-[8px] w-full px-2", children: [_jsx(CiSearch, { className: "w-5 h-5" }), _jsx("input", { type: "text", placeholder: placeholder || "Search anything...", className: "p-3 px-6 bg-[#212121] outline-0 w-full ", value: search, onChange: HandleIput })] }));
}
