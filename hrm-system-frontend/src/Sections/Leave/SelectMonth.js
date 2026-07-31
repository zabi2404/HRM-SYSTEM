import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, } from "../../Components/Common/ui/select";
export function SelectMonth() {
    return (_jsxs(Select, { children: [_jsx(SelectTrigger, { className: "w-[180px]", children: _jsx(SelectValue, { placeholder: "Select Month" }) }), _jsx(SelectContent, { children: _jsxs(SelectGroup, { children: [_jsx(SelectLabel, { children: "Previous Month" }), _jsx(SelectItem, { value: "1", children: "1 Month" }), _jsx(SelectItem, { value: "2", children: " 2 Month" }), _jsx(SelectItem, { value: "3", children: " 3 Month" }), _jsx(SelectItem, { value: "6", children: " 6 Month" })] }) })] }));
}
