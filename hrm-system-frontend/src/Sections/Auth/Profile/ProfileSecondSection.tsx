import { Button } from '@/Components/Common/ui/button';
import { GenderSelect } from '@/Components/GenderSelect';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaPen } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';
import { UseDispatch, useSelector } from 'react-redux';
export default function ProfileSecondSection() {


    const user = useSelector((state: any) => state.user.currentUser)
     const [buttonClicked, setButtonClicked] = useState(false);
    const params = useParams();
    const [edit, setEdit] = useState(false)
    const [empInfo, setEmpInfo] = useState();
    const [formData, setFormData] = useState({
        name: '',
        contact_number: '',
        address: '',
    })




    const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
        console.log(formData)

    }

    const formSubbmission = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('form subbmitted : ', formData);
        axios.post(`/api/employee/update-employee/${user.rest._id}`, formData)
            .then((response) => {
                console.log(response.data);
                toast.success("Profile Updated Successfully")
                setButtonClicked(!buttonClicked);
            })
            .catch((err) => {
                console.log(err.message);
                toast.error("Error while updating profile")
            })
    }


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


    return (

        <>

            <form onSubmit={formSubbmission}>
                <div className='bg-[#212121] flex flex-col gap-10 rounded-lg p-4 pt-10 overflow-auto max-h-[700px] customScroll'>
                    <div className='flex justify-end gap-4 items-center '>

                        <Button type='button' variant='outline' className='cursor-pointer '
                            onClick={() => { setEdit(true) }}
                        > Edit</Button>
                        <Button type='submit' className='cursor-pointer hover:opacity-70'
                            onClick={() => { setEdit(false) }}
                            
                        > Save Changes</Button>

                    </div>
                    <div className='border border-[#424242] rounded-lg'>

                        {/* title */}

                        <div className="flex justify-between  border-b border-[#424242] p-4" >
                            <h1 className='text-2xl font-semibold'>Personal Info</h1>


                        </div>
                        {/* body */}
                        <div className='p-4 flex flex-col gap-4'>
                            <div className='grid grid-cols-2 items-center '>
                                <p className='opacity-50'>Full Name</p>
                                {edit ?
                                    <input
                                        className='outline-1  rounded-[6px] p-1'
                                        type="text"
                                        id='name'
                                        placeholder='Name'
                                        value={formData.name}
                                        onChange={HandleChange}
                                    />
                                    :
                                    <p>{formData.name || "-"}</p>
                                }

                            </div>
                            <div className='grid grid-cols-2 items-center '>
                                <p className='opacity-50'>Date of Birth </p>

                                <p>{empInfo?.dob || "-"}</p>

                            </div>
                            <div className='grid grid-cols-2 items-center '>
                                <p className='opacity-50'>Email Address </p>
                                <p>{empInfo?.user_Ref.email || "-"}</p>

                            </div>

                            <div className='grid grid-cols-2 items-center '>
                                <p className='opacity-50'>Gender </p>

                                <p>{empInfo?.gender || "-"}</p>

                            </div>
                            <div className='grid grid-cols-2 items-center '>
                                <p className='opacity-50'>Phone Number </p>


                                {edit ?
                                    <input
                                        className='outline-1  rounded-[6px] p-1'
                                        type="text"
                                        id='contact_number'
                                        placeholder='contact_number'
                                        value={formData.contact_number}
                                        onChange={HandleChange}
                                    />
                                    :
                                    <p>{formData.contact_number || "-"}</p>
                                }

                            </div>

                        </div>

                    </div>

                    <div className='border border-[#424242] rounded-lg'>
                        {/* title */}

                        <div className="flex justify-between  border-b border-[#424242] p-4" >
                            <h1 className='text-2xl font-semibold'>Address</h1>


                        </div>
                        {/* body */}
                        <div className='p-4 flex flex-col gap-4'>
                            <div className='grid grid-cols-2 items-center '>
                                <p className='opacity-50'>Primary Address</p>

                                {edit ?
                                    <input
                                        className='outline-1  rounded-[6px] p-1'
                                        type="text"
                                        id='address'
                                        placeholder='address'
                                        value={formData.address}
                                        onChange={HandleChange}
                                    />
                                    :
                                    <p>{formData.address || "-"}</p>
                                }

                            </div>

                            <div className='grid grid-cols-2 items-center '>
                                <p className='opacity-50'>Province/State</p>


                                <p>{empInfo?.state || "-"}</p>

                            </div>

                            <div className='grid grid-cols-2 items-center '>
                                <p className='opacity-50'>City </p>

                                <p>{empInfo?.city || "-"}</p>

                            </div>


                        </div>

                    </div>

                    <div className='border border-[#424242] rounded-lg'>
                        {/* title */}

                        <div className="flex justify-between  border-b border-[#424242] p-4" >
                            <h1 className='text-2xl font-semibold'>Academic History</h1>


                        </div>
                        {/* body */}
                        <div className='p-4 flex flex-col gap-4'>
                            <div className='grid grid-cols-2 items-center '>
                                <p className='opacity-50'>Degree</p>


                                <p>{empInfo?.degree || "-"}</p>

                            </div>
                            <div className='grid grid-cols-2 items-center '>
                                <p className='opacity-50'>Institution</p>


                                <p>{empInfo?.institution || "-"}</p>

                            </div>
                            <div className='grid grid-cols-2 items-center '>
                                <p className='opacity-50'>Year</p>

                                <p>{empInfo?.year || "-"}</p>

                            </div>

                            <div className='grid grid-cols-2 items-center '>
                                <p className='opacity-50'>Achievements </p>

                                <p>{empInfo?.achievements || "-"}</p>

                            </div>


                        </div>

                    </div>

                    <div className='border border-[#424242] rounded-lg'>
                        {/* title */}

                        <div className="flex justify-between  border-b border-[#424242] p-4" >
                            <h1 className='text-2xl font-semibold'>Work Information</h1>


                        </div>
                        {/* body */}
                        <div className='p-4 flex flex-col gap-4'>
                            <div className='grid grid-cols-2 items-center '>
                                <p className='opacity-50'>Experience</p>

                                <p>{empInfo?.experience || "-"}</p>

                            </div>
                            <div className='grid grid-cols-2 items-center '>
                                <p className='opacity-50'>Skills</p>

                                <p>{empInfo?.skills || "-"}</p>

                            </div>
                            <div className='grid grid-cols-2 items-center '>
                                <p className='opacity-50'>Certifications</p>

                                <p>{empInfo?.certifications || "-"}</p>

                            </div>

                            <div className='grid grid-cols-2 items-center '>
                                <p className='opacity-50'>Languages </p>

                                <p>{empInfo?.languages || "-"}</p>

                            </div>


                        </div>

                    </div>
                </div>


            </form>
        </>
    )
}
