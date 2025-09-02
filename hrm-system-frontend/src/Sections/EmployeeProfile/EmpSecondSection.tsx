import { Button } from '@/Components/Common/ui/button';
import { GenderSelect } from '@/Components/GenderSelect';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaPen } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';
export default function EmpSecondSection() {


    const params = useParams();
    const [edit, setEdit] = useState(false)
      const [listing, setListing] = useState();
    const [formData,setFormData]=useState({
        name:'',
        dob:'',
        email:'',
        gender:'',
        contact_number:'',
        address:'',
        state:'',
        city:'',
        degree:'',
        institution:'',
        year:0,
        achievements:'',
        experience:'',
        skills:'',
        certifications:'',
        languages:'',
    })


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
      

      



const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    setFormData({
        ...formData,
        [e.target.id]: e.target.value
    })
    console.log(formData)

}

const formSubbmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('form subbmitted : ',formData);
    axios.post(`/api/employee/update-employee/${params.id}`, formData)
        .then((response) => {
            console.log(response.data);
          toast.success("Profile Updated Successfully")
           
        })
        .catch((err) => {
            console.log(err.message);
            toast.error("Error while updating profile")
        })
}

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
                                <p>{formData.name||"-"}</p>
                            }

                        </div>
                        <div className='grid grid-cols-2 items-center '>
                            <p className='opacity-50'>Date of Birth </p>
                            {edit ?
                                <input
                                    className='outline-1  rounded-[6px] p-1'
                                    id='dob'
                                    value={formData.dob}
                                    type="Date"
                                    onChange={HandleChange}
                                />
                                :
                                <p>{formData.dob||"-"}</p>
                            }
                        </div>
                        <div className='grid grid-cols-2 items-center '>
                            <p className='opacity-50'>Email Address </p>
                            {edit ?
                                <input
                                    className='outline-1  rounded-[6px] p-1'
                                    type="text"
                                    id='email'
                                    placeholder='@email.com'
                                    value={formData.email}
                                    onChange={HandleChange}
                                />
                                :
                                <p>{formData.email ||"-"}</p>
                            }
                        </div>

                        <div className='grid grid-cols-2 items-center '>
                            <p className='opacity-50'>Gender </p>
                            {edit ?
                                <GenderSelect
                                value={formData.gender}
                                onChange={(val)=>{
                                    setFormData({
                                        ...formData,
                                        gender:val
                                    })
                                }}
                                />
                                :
                                <p>{formData.gender||"-"}</p>
                            }
                        </div>
                        <div className='grid grid-cols-2 items-center '>
                            <p className='opacity-50'>Phone Number </p>
                            {edit ?
                                <input
                                    className='outline-1  rounded-[6px] p-1'
                                    type="text"
                                    value={formData.contact_number}
                                    id='contact_number'
                                    placeholder='+92'
                                    onChange={HandleChange}
                                />
                                :
                                <p>{formData.contact_number||"-"}</p>
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
                                    value={formData.address}
                                    placeholder='Primary Address'
                                    onChange={HandleChange}
                                />
                                :
                                <p>{formData.address||"-"}</p>
                            }
                        </div>
                       
                        <div className='grid grid-cols-2 items-center '>
                            <p className='opacity-50'>Province/State</p>
                            {edit ?
                                <input
                                    className='outline-1  rounded-[6px] p-1'
                                    type="text"
                                    id='state'
                                    value={formData.state}
                                    placeholder='Province/State'
                                    onChange={HandleChange}
                                />
                                :
                                <p>{formData.state||"-"}</p>
                            }
                        </div>

                        <div className='grid grid-cols-2 items-center '>
                            <p className='opacity-50'>City </p>
                            {edit ?
                                <input
                                    className='outline-1  rounded-[6px] p-1'
                                    type="text"
                                    placeholder='City'
                                    id='city'
                                    value={formData.city}
                                    onChange={HandleChange}
                                />
                                :
                                <p>{formData.city||"-"}</p>
                            }
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
                            {edit ?
                                <input
                                    className='outline-1  rounded-[6px] p-1'
                                    type="text"
                                    id='degree'
                                    placeholder='Degree'
                                    value={formData.degree}
                                    onChange={HandleChange}
                                />
                                :
                                <p>{formData.degree||"-"}</p>
                            }
                        </div>
                        <div className='grid grid-cols-2 items-center '>
                            <p className='opacity-50'>Institution</p>
                             {edit ?
                                <input
                                    className='outline-1  rounded-[6px] p-1'
                                    type="text"
                                    id='institution'
                                    placeholder='Institution'
                                    value={formData.institution}
                                    onChange={HandleChange}
                                />
                                :
                                <p>{"-"}</p>
                            }
                        </div>
                        <div className='grid grid-cols-2 items-center '>
                            <p className='opacity-50'>Year</p>
                             {edit ?
                                <input
                                    className='outline-1  rounded-[6px] p-1'
                                    type="number"
                                    placeholder='year'
                                    id='year'
                                    value={formData.year}
                                    onChange={HandleChange}
                                />
                                :
                                <p>{formData.year||"-"}</p>
                            }
                        </div>

                        <div className='grid grid-cols-2 items-center '>
                            <p className='opacity-50'>Achievements </p>
                             {edit ?
                                <input
                                    className='outline-1  rounded-[6px] p-1'
                                    type="text"
                                    id='achievements'
                                    placeholder='Achievements'
                                    value={formData.achievements}
                                    onChange={HandleChange}
                                />
                                :
                                <p>{formData.achievements||"-"}</p>
                            }
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
                            {edit ?
                                <input
                                    className='outline-1  rounded-[6px] p-1'
                                    type="text"
                                    placeholder='experince...'
                                    id='experience'
                                    value={formData.experience}
                                    onChange={HandleChange}
                                />
                                :
                                <p>{formData.experience||"-"}</p>
                            }
                        </div>
                        <div className='grid grid-cols-2 items-center '>
                            <p className='opacity-50'>Skills</p>
                            {edit ?
                                <input
                                    className='outline-1  rounded-[6px] p-1'
                                    type="text"
                                    id='skills'
                                    placeholder='Skills'
                                    value={formData.skills}
                                    onChange={HandleChange}
                                />
                                :
                                <p>{formData.skills||"-"}</p>
                            }
                        </div>
                        <div className='grid grid-cols-2 items-center '>
                            <p className='opacity-50'>Certifications</p>
                            {edit ?
                                <input
                                    className='outline-1  rounded-[6px] p-1'
                                    type="text"
                                    id='certifications'
                                    placeholder='Certifications'
                                    value={formData.certifications}
                                    onChange={HandleChange}
                                />
                                :
                                <p>{formData.certifications||"-"}</p>
                            }
                        </div>

                        <div className='grid grid-cols-2 items-center '>
                            <p className='opacity-50'>Languages </p>
                            {edit ?
                                <input
                                    className='outline-1  rounded-[6px] p-1'
                                    type="text"
                                    id='languages'
                                    placeholder='Languages'
                                    value={formData.languages}
                                    onChange={HandleChange}
                                />
                                :
                                <p>{formData.languages||"-"}</p>
                            }
                        </div>


                    </div>

                </div>
            </div>


            </form>
        </>
    )
}
