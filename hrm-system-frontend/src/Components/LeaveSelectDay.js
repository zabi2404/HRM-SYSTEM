import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, } from "./Common/ui/select";
export default function SelectDays({ onChange, value }) {
    console.log(value);
    return (_jsxs(Select, { onValueChange: (val) => {
            onChange?.(val);
        }, required: true, value: value, children: [_jsx(SelectTrigger, { className: "w-[180px]", children: _jsx(SelectValue, { placeholder: "Select Days" }) }), _jsx(SelectContent, { children: _jsxs(SelectGroup, { children: [_jsx(SelectLabel, { children: "Days" }), _jsx(SelectItem, { value: "single", children: "single" }), _jsx(SelectItem, { value: "multiple", children: "multiple" })] }) })] }));
}
