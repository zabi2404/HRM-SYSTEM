import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaChevronDown } from "react-icons/fa";
import * as React from "react";
import { Button } from "@/Components/Common/ui/button";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger, } from "@/Components/Common/ui/dropdown-menu";
export function DropDownButton() {
    const [showStatusBar, setShowStatusBar] = React.useState(true);
    const [showActivityBar, setShowActivityBar] = React.useState(false);
    const [showPanel, setShowPanel] = React.useState(false);
    return (_jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { asChild: true, children: _jsxs(Button, { className: "px-8 py-6 flex gap-7 ", variant: "outline", children: [_jsx("p", { children: "All Jobs" }), "   ", _jsx(FaChevronDown, {})] }) }), _jsxs(DropdownMenuContent, { className: "w-56", children: [_jsx(DropdownMenuCheckboxItem, { checked: showStatusBar, onCheckedChange: setShowStatusBar, children: "Status Bar" }), _jsx(DropdownMenuCheckboxItem, { checked: showActivityBar, onCheckedChange: setShowActivityBar, children: "Activity Bar" }), _jsx(DropdownMenuCheckboxItem, { checked: showPanel, onCheckedChange: setShowPanel, children: "Panel" })] })] }));
}
