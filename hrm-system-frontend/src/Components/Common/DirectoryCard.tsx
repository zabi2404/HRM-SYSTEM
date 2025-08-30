import React, { useState } from 'react'
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

type DirectoryCardProps = {
    username: string
    contact_number: string
    email: string
    job_title: string
}

export default function DirectoryCard({ username, contact_number, email, job_title }: DirectoryCardProps) {

    let name = username.slice(0, 1).toUpperCase() + username.slice(1).toLowerCase();

    const [copied, setCopied] = useState(false);
    const handleCopy = (val) => {
        navigator.clipboard.writeText(val);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500); // reset after 1.5s
    };

    return (
        <>
            <div className='bg-[#212121] flex flex-col text-center jusitfy-center items-center  gap-3 rounded-lg max-w-fit py-6 px-8
    '>
                {/* UPPER part */}
                <div className='flex flex-col jusitfy-center items-center gap-3 '>
                    <div className="w-16 h-16  object-cover">
                        <img src="../../../public/images/blank-profile-picture-973460_1280.webp"
                            className='rounded-full'
                            alt="" />
                    </div>
                    <div className=' flex flex-col jusitfy-center items-center '>
                        <Link to=''>
                            <h1 className="text-2xl hover:underline">
                                {
                                    name
                                }
                            </h1>
                        </Link>
                        <p>
                            {job_title || '-'}
                        </p>
                    </div>
                </div>
                {/* lower part */}
                <div className='flex flex-col jusitfy-center items-center gap-2 border-t pt-4 border-[#424242]'>
                    {copied && (
                        <p className="absolute -translate-y-5  bg-black text-white text-xs px-2 py-1 rounded">
                            Copied
                        </p>
                    )}
                    <div className='flex  items-center gap-2'>
                        <IoIosMail />
                        <p className='cursor-pointer '
                            onClick={() => {
                                handleCopy(email)
                            }}>
                            {email}
                        </p>

                    </div>
                    <div className='flex items-center gap-2'>
                        <FaPhoneAlt className='w-4 h-4' />

                        <p className='cursor-pointer '
                            onClick={() => {
                                handleCopy(contact_number)
                            }}
                        >{contact_number}

                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}
