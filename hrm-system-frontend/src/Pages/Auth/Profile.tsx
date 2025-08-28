import React from 'react'

import ProfileFirstSection from '@/Sections/Auth/Profile/ProfileFirstSection';
import ProfileSecondSection from '@/Sections/Auth/Profile/ProfileSecondSection';

export default function Profile() {
    return (
        <>
            <div className='grid md:grid-cols-[25%_75%] gap-4 
            xsm:grid-rows-2 md:grid-rows-1
            '>
                
              <ProfileFirstSection/>
               <ProfileSecondSection/>
               
            </div>


        </>
    )
}
