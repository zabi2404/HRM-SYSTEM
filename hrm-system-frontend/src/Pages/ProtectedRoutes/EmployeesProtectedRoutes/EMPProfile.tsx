import React, { useEffect, useState } from 'react'

import ProfileFirstSection from '@/Sections/Auth/Profile/ProfileFirstSection';
import ProfileSecondSection from '@/Sections/Auth/Profile/ProfileSecondSection';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import EmpSecondSection from '@/Sections/EmployeeProfile/EmpSecondSection';



export default function EMPProfile() {
    
const param = useParams();



    const [listing, setListing] = useState();
  
    useEffect(() => {

        axios.get(`/api/employee/getEmployee/${param.id}`)
            .then((response) => {
                console.log(response.data)
                const data = response.data
                setListing(data)
            })
            .catch((err) =>
                console.log(err))
    }, []);
    return (
        <>
            <div className='grid md:grid-cols-[25%_75%] gap-4 
            xsm:grid-rows-2 md:grid-rows-1
            '>
                {/* <ProfileFirstSection 
/>
<ProfileSecondSection 
*/}

              <ProfileFirstSection
                                name={listing?.user_Ref.username}
                                job_title={listing?.job_title}
                                email={listing?.user_Ref.email}
                                contact_number={listing?.contact_number}
                                department={listing?.department}
                                employeeCode={listing?.employeeCode}
                            />
                            <EmpSecondSection
                            />
                  
                  
            </div>


        </>
    )
}
