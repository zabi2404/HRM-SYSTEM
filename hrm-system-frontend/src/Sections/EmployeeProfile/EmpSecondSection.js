import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Button } from '@/Components/Common/ui/button';
import { GenderSelect } from '@/Components/GenderSelect';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';
export default function EmpSecondSection() {
    const params = useParams();
    const [edit, setEdit] = useState(false);
    const [listing, setListing] = useState();
    const [formData, setFormData] = useState({
        name: '',
        dob: '',
        email: '',
        gender: '',
        contact_number: '',
        address: '',
        state: '',
        city: '',
        degree: '',
        institution: '',
        year: 0,
        achievements: '',
        experience: '',
        skills: '',
        certifications: '',
        languages: '',
    });
    useEffect(() => {
        axios.get(`/api/employee/getEmployee/${params.id}`)
            .then((response) => {
            const data = response.data;
            console.log(data);
            setFormData({
                name: data.name || "",
                dob: data.dob || "",
                gender: data.gender || "",
                city: data.city || "",
                institution: data.institution || "",
                degree: data.degree || "",
                year: data.year || 0,
                experience: data.experience || "",
                achievements: data.achievements || "",
                skills: data.skills || "",
                email: data.user_Ref.email || "",
                contact_number: data.contact_number || "",
                address: data.address || "",
                state: data.state || "",
                languages: data.Languages || "",
                certifications: data.Certifications || "",
            });
        })
            .catch((err) => console.log(err));
    }, [params.id]);
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
        axios.post(`/api/employee/update-employee/${params.id}`, formData)
            .then((response) => {
            console.log(response.data);
            toast.success("Profile Updated Successfully");
        })
            .catch((err) => {
            console.log(err.message);
            toast.error("Error while updating profile");
        });
    };
    return (_jsx(_Fragment, { children: _jsx("form", { onSubmit: formSubbmission, children: _jsxs("div", { className: 'bg-[#212121] flex flex-col gap-10 rounded-lg p-4 pt-10 overflow-auto max-h-[700px] customScroll', children: [_jsxs("div", { className: 'flex justify-end gap-4 items-center ', children: [_jsx(Button, { type: 'button', variant: 'outline', className: 'cursor-pointer ', onClick: () => { setEdit(true); }, children: " Edit" }), _jsx(Button, { type: 'submit', className: 'cursor-pointer hover:opacity-70', onClick: () => { setEdit(false); }, children: " Save Changes" })] }), _jsxs("div", { className: 'border border-[#424242] rounded-lg', children: [_jsx("div", { className: "flex justify-between  border-b border-[#424242] p-4", children: _jsx("h1", { className: 'text-2xl font-semibold', children: "Personal Info" }) }), _jsxs("div", { className: 'p-4 flex flex-col gap-4', children: [_jsxs("div", { className: 'grid grid-cols-2 items-center ', children: [_jsx("p", { className: 'opacity-50', children: "Full Name" }), edit ?
                                                _jsx("input", { className: 'outline-1  rounded-[6px] p-1', type: "text", id: 'name', placeholder: 'Name', value: formData.name, onChange: HandleChange })
                                                :
                                                    _jsx("p", { children: formData.name || "-" })] }), _jsxs("div", { className: 'grid grid-cols-2 items-center ', children: [_jsx("p", { className: 'opacity-50', children: "Date of Birth " }), edit ?
                                                _jsx("input", { className: 'outline-1  rounded-[6px] p-1', id: 'dob', value: formData.dob, type: "Date", onChange: HandleChange })
                                                :
                                                    _jsx("p", { children: formData.dob || "-" })] }), _jsxs("div", { className: 'grid grid-cols-2 items-center ', children: [_jsx("p", { className: 'opacity-50', children: "Email Address " }), edit ?
                                                _jsx("input", { className: 'outline-1  rounded-[6px] p-1', type: "text", id: 'email', placeholder: '@email.com', value: formData.email, onChange: HandleChange })
                                                :
                                                    _jsx("p", { children: formData.email || "-" })] }), _jsxs("div", { className: 'grid grid-cols-2 items-center ', children: [_jsx("p", { className: 'opacity-50', children: "Gender " }), edit ?
                                                _jsx(GenderSelect, { value: formData.gender, onChange: (val) => {
                                                        setFormData({
                                                            ...formData,
                                                            gender: val
                                                        });
                                                    } })
                                                :
                                                    _jsx("p", { children: formData.gender || "-" })] }), _jsxs("div", { className: 'grid grid-cols-2 items-center ', children: [_jsx("p", { className: 'opacity-50', children: "Phone Number " }), edit ?
                                                _jsx("input", { className: 'outline-1  rounded-[6px] p-1', type: "text", value: formData.contact_number, id: 'contact_number', placeholder: '+92', onChange: HandleChange })
                                                :
                                                    _jsx("p", { children: formData.contact_number || "-" })] })] })] }), _jsxs("div", { className: 'border border-[#424242] rounded-lg', children: [_jsx("div", { className: "flex justify-between  border-b border-[#424242] p-4", children: _jsx("h1", { className: 'text-2xl font-semibold', children: "Address" }) }), _jsxs("div", { className: 'p-4 flex flex-col gap-4', children: [_jsxs("div", { className: 'grid grid-cols-2 items-center ', children: [_jsx("p", { className: 'opacity-50', children: "Primary Address" }), edit ?
                                                _jsx("input", { className: 'outline-1  rounded-[6px] p-1', type: "text", id: 'address', value: formData.address, placeholder: 'Primary Address', onChange: HandleChange })
                                                :
                                                    _jsx("p", { children: formData.address || "-" })] }), _jsxs("div", { className: 'grid grid-cols-2 items-center ', children: [_jsx("p", { className: 'opacity-50', children: "Province/State" }), edit ?
                                                _jsx("input", { className: 'outline-1  rounded-[6px] p-1', type: "text", id: 'state', value: formData.state, placeholder: 'Province/State', onChange: HandleChange })
                                                :
                                                    _jsx("p", { children: formData.state || "-" })] }), _jsxs("div", { className: 'grid grid-cols-2 items-center ', children: [_jsx("p", { className: 'opacity-50', children: "City " }), edit ?
                                                _jsx("input", { className: 'outline-1  rounded-[6px] p-1', type: "text", placeholder: 'City', id: 'city', value: formData.city, onChange: HandleChange })
                                                :
                                                    _jsx("p", { children: formData.city || "-" })] })] })] }), _jsxs("div", { className: 'border border-[#424242] rounded-lg', children: [_jsx("div", { className: "flex justify-between  border-b border-[#424242] p-4", children: _jsx("h1", { className: 'text-2xl font-semibold', children: "Academic History" }) }), _jsxs("div", { className: 'p-4 flex flex-col gap-4', children: [_jsxs("div", { className: 'grid grid-cols-2 items-center ', children: [_jsx("p", { className: 'opacity-50', children: "Degree" }), edit ?
                                                _jsx("input", { className: 'outline-1  rounded-[6px] p-1', type: "text", id: 'degree', placeholder: 'Degree', value: formData.degree, onChange: HandleChange })
                                                :
                                                    _jsx("p", { children: formData.degree || "-" })] }), _jsxs("div", { className: 'grid grid-cols-2 items-center ', children: [_jsx("p", { className: 'opacity-50', children: "Institution" }), edit ?
                                                _jsx("input", { className: 'outline-1  rounded-[6px] p-1', type: "text", id: 'institution', placeholder: 'Institution', value: formData.institution, onChange: HandleChange })
                                                :
                                                    _jsx("p", { children: "-" })] }), _jsxs("div", { className: 'grid grid-cols-2 items-center ', children: [_jsx("p", { className: 'opacity-50', children: "Year" }), edit ?
                                                _jsx("input", { className: 'outline-1  rounded-[6px] p-1', type: "number", placeholder: 'year', id: 'year', value: formData.year, onChange: HandleChange })
                                                :
                                                    _jsx("p", { children: formData.year || "-" })] }), _jsxs("div", { className: 'grid grid-cols-2 items-center ', children: [_jsx("p", { className: 'opacity-50', children: "Achievements " }), edit ?
                                                _jsx("input", { className: 'outline-1  rounded-[6px] p-1', type: "text", id: 'achievements', placeholder: 'Achievements', value: formData.achievements, onChange: HandleChange })
                                                :
                                                    _jsx("p", { children: formData.achievements || "-" })] })] })] }), _jsxs("div", { className: 'border border-[#424242] rounded-lg', children: [_jsx("div", { className: "flex justify-between  border-b border-[#424242] p-4", children: _jsx("h1", { className: 'text-2xl font-semibold', children: "Work Information" }) }), _jsxs("div", { className: 'p-4 flex flex-col gap-4', children: [_jsxs("div", { className: 'grid grid-cols-2 items-center ', children: [_jsx("p", { className: 'opacity-50', children: "Experience" }), edit ?
                                                _jsx("input", { className: 'outline-1  rounded-[6px] p-1', type: "text", placeholder: 'experince...', id: 'experience', value: formData.experience, onChange: HandleChange })
                                                :
                                                    _jsx("p", { children: formData.experience || "-" })] }), _jsxs("div", { className: 'grid grid-cols-2 items-center ', children: [_jsx("p", { className: 'opacity-50', children: "Skills" }), edit ?
                                                _jsx("input", { className: 'outline-1  rounded-[6px] p-1', type: "text", id: 'skills', placeholder: 'Skills', value: formData.skills, onChange: HandleChange })
                                                :
                                                    _jsx("p", { children: formData.skills || "-" })] }), _jsxs("div", { className: 'grid grid-cols-2 items-center ', children: [_jsx("p", { className: 'opacity-50', children: "Certifications" }), edit ?
                                                _jsx("input", { className: 'outline-1  rounded-[6px] p-1', type: "text", id: 'certifications', placeholder: 'Certifications', value: formData.certifications, onChange: HandleChange })
                                                :
                                                    _jsx("p", { children: formData.certifications || "-" })] }), _jsxs("div", { className: 'grid grid-cols-2 items-center ', children: [_jsx("p", { className: 'opacity-50', children: "Languages " }), edit ?
                                                _jsx("input", { className: 'outline-1  rounded-[6px] p-1', type: "text", id: 'languages', placeholder: 'Languages', value: formData.languages, onChange: HandleChange })
                                                :
                                                    _jsx("p", { children: formData.languages || "-" })] })] })] })] }) }) }));
}
