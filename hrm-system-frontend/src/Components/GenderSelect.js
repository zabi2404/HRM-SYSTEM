import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, } from "./Common/ui/select";
export function GenderSelect({ onChange, value }) {
    return (_jsxs(Select, { onValueChange: (val) => {
            onChange(val);
        }, required: true, value: value, children: [_jsx(SelectTrigger, { className: "w-[180px]", children: _jsx(SelectValue, { placeholder: "Select a Gender" }) }), _jsx(SelectContent, { children: _jsxs(SelectGroup, { children: [_jsx(SelectLabel, { children: "Gender" }), _jsx(SelectItem, { value: "male", children: "Male" }), _jsx(SelectItem, { value: "female", children: "Female" })] }) })] }));
}
