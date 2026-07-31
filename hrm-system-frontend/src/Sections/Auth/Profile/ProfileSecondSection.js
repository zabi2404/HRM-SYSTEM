import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Button } from '@/Components/Common/ui/button';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';
import { useSelector } from 'react-redux';
export default function ProfileSecondSection() {
    const user = useSelector((state) => state.user.currentUser);
    const [buttonClicked, setButtonClicked] = useState(false);
    const params = useParams();
    const [edit, setEdit] = useState(false);
    const [empInfo, setEmpInfo] = useState();
    const [formData, setFormData] = useState({
        name: '',
        contact_number: '',
        address: '',
    });
    const HandleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
        console.log(formData);
    };
    const formSubbmission = (e) => {
        e.preventDefault();
        console.log('form subbmitted : ', formData);
        axios.post(`/api/employee/update-employeeById/${user.rest._id}`, formData)
            .then((response) => {
            console.log(response.data);
            toast.success("Profile Updated Successfully");
            setButtonClicked(!buttonClicked);
        })
            .catch((err) => {
            console.log(err.message);
            toast.error("Error while updating profile");
        });
    };
    useEffect(() => {
        console.log(user.rest._id);
        axios.get(`/api/employee/getEmployee/${user.rest._id}`)
            .then((response) => {
            const data = response.data;
            setEmpInfo(data);
            console.log(data);
            setFormData({
                name: data.name || "",
                contact_number: data.contact_number || "",
                address: data.address || "",
            });
        })
            .catch((err) => console.log(err));
    }, [buttonClicked]);
    return (_jsx(_Fragment, { children: _jsx("form", { onSubmit: formSubbmission, children: _jsxs("div", { className: 'bg-[#212121] flex flex-col gap-10 rounded-lg p-4 pt-10 overflow-auto max-h-[700px] customScroll', children: [_jsxs("div", { className: 'flex justify-end gap-4 items-center ', children: [_jsx(Button, { type: 'button', variant: 'outline', className: 'cursor-pointer ', onClick: () => { setEdit(true); }, children: " Edit" }), _jsx(Button, { type: 'submit', className: 'cursor-pointer hover:opacity-70', onClick: () => { setEdit(false); }, children: " Save Changes" })] }), _jsxs("div", { className: 'border border-[#424242] rounded-lg', children: [_jsx("div", { className: "flex justify-between  border-b border-[#424242] p-4", children: _jsx("h1", { className: 'text-2xl font-semibold', children: "Personal Info" }) }), _jsxs("div", { className: 'p-4 flex flex-col gap-4', children: [_jsxs("div", { className: 'grid grid-cols-2 items-center ', children: [_jsx("p", { className: 'opacity-50', children: "Full Name" }), edit ?
                                                _jsx("input", { className: 'outline-1  rounded-[6px] p-1', type: "text", id: 'name', placeholder: 'Name', value: formData.name, onChange: HandleChange })
                                                :
                                                    _jsx("p", { children: formData.name || "-" })] }), _jsxs("div", { className: 'grid grid-cols-2 items-center ', children: [_jsx("p", { className: 'opacity-50', children: "Date of Birth " }), _jsx("p", { children: empInfo?.dob?.split("T")[0] || "-" })] }), _jsxs("div", { className: 'grid grid-cols-2 items-center ', children: [_jsx("p", { className: 'opacity-50', children: "Email Address " }), _jsx("p", { children: empInfo?.user_Ref.email || "-" })] }), _jsxs("div", { className: 'grid grid-cols-2 items-center ', children: [_jsx("p", { className: 'opacity-50', children: "Gender " }), _jsx("p", { children: empInfo?.gender || "-" })] }), _jsxs("div", { className: 'grid grid-cols-2 items-center ', children: [_jsx("p", { className: 'opacity-50', children: "Phone Number " }), edit ?
                                                _jsx("input", { className: 'outline-1  rounded-[6px] p-1', type: "text", id: 'contact_number', placeholder: 'contact_number', value: formData.contact_number, onChange: HandleChange })
                                                :
                                                    _jsx("p", { children: formData.contact_number || "-" })] })] })] }), _jsxs("div", { className: 'border border-[#424242] rounded-lg', children: [_jsx("div", { className: "flex justify-between  border-b border-[#424242] p-4", children: _jsx("h1", { className: 'text-2xl font-semibold', children: "Address" }) }), _jsxs("div", { className: 'p-4 flex flex-col gap-4', children: [_jsxs("div", { className: 'grid grid-cols-2 items-center ', children: [_jsx("p", { className: 'opacity-50', children: "Primary Address" }), edit ?
                                                _jsx("input", { className: 'outline-1  rounded-[6px] p-1', type: "text", id: 'address', placeholder: 'address', value: formData.address, onChange: HandleChange })
                                                :
                                                    _jsx("p", { children: formData.address || "-" })] }), _jsxs("div", { className: 'grid grid-cols-2 items-center ', children: [_jsx("p", { className: 'opacity-50', children: "Province/State" }), _jsx("p", { children: empInfo?.state || "-" })] }), _jsxs("div", { className: 'grid grid-cols-2 items-center ', children: [_jsx("p", { className: 'opacity-50', children: "City " }), _jsx("p", { children: empInfo?.city || "-" })] })] })] }), _jsxs("div", { className: 'border border-[#424242] rounded-lg', children: [_jsx("div", { className: "flex justify-between  border-b border-[#424242] p-4", children: _jsx("h1", { className: 'text-2xl font-semibold', children: "Academic History" }) }), _jsxs("div", { className: 'p-4 flex flex-col gap-4', children: [_jsxs("div", { className: 'grid grid-cols-2 items-center ', children: [_jsx("p", { className: 'opacity-50', children: "Degree" }), _jsx("p", { children: empInfo?.degree || "-" })] }), _jsxs("div", { className: 'grid grid-cols-2 items-center ', children: [_jsx("p", { className: 'opacity-50', children: "Institution" }), _jsx("p", { children: empInfo?.institution || "-" })] }), _jsxs("div", { className: 'grid grid-cols-2 items-center ', children: [_jsx("p", { className: 'opacity-50', children: "Year" }), _jsx("p", { children: empInfo?.year || "-" })] }), _jsxs("div", { className: 'grid grid-cols-2 items-center ', children: [_jsx("p", { className: 'opacity-50', children: "Achievements " }), _jsx("p", { children: empInfo?.achievements || "-" })] })] })] }), _jsxs("div", { className: 'border border-[#424242] rounded-lg', children: [_jsx("div", { className: "flex justify-between  border-b border-[#424242] p-4", children: _jsx("h1", { className: 'text-2xl font-semibold', children: "Work Information" }) }), _jsxs("div", { className: 'p-4 flex flex-col gap-4', children: [_jsxs("div", { className: 'grid grid-cols-2 items-center ', children: [_jsx("p", { className: 'opacity-50', children: "Experience" }), _jsx("p", { children: empInfo?.experience || "-" })] }), _jsxs("div", { className: 'grid grid-cols-2 items-center ', children: [_jsx("p", { className: 'opacity-50', children: "Skills" }), _jsx("p", { children: empInfo?.skills || "-" })] }), _jsxs("div", { className: 'grid grid-cols-2 items-center ', children: [_jsx("p", { className: 'opacity-50', children: "Certifications" }), _jsx("p", { children: empInfo?.certifications || "-" })] }), _jsxs("div", { className: 'grid grid-cols-2 items-center ', children: [_jsx("p", { className: 'opacity-50', children: "Languages " }), _jsx("p", { children: empInfo?.languages || "-" })] })] })] })] }) }) }));
}
