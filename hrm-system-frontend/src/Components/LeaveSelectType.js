import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, } from "./Common/ui/select";
export function SelectDemo({ onChange, value }) {
    return (_jsxs(Select, { onValueChange: (val) => {
            console.log("from select", val);
            onChange?.(val);
        }, value: value, required: true, children: [_jsx(SelectTrigger, { className: "w-[180px]", children: _jsx(SelectValue, { placeholder: "Select Type" }) }), _jsx(SelectContent, { children: _jsxs(SelectGroup, { children: [_jsx(SelectLabel, { children: "Types" }), _jsx(SelectItem, { value: "all", children: "All" }), _jsx(SelectItem, { value: "Sick", children: "Sick" }), _jsx(SelectItem, { value: "other", children: "other" })] }) })] }));
}
