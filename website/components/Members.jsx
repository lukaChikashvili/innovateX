import React from 'react'
import dev from '../assets/developer.jpg'
import designer from '../assets/designer.jpg'
import design from '../assets/3d.jpg'
import boss from '../assets/boss.jpg'
import Image from 'next/image';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const Members = () => {

    const members = [
        {
            id: 1,
            name: "Alex Rivera",
            job: "Lead Web Developer",
            img: dev
        },

        {
            id: 2,
            name: "Jenna Martinez",
            job: "UI/UX Designer",
            img: designer
        },

        {
            id: 3,
            name: "Liam Patel",
            job: "3D Graphics Specialist",
            img: design
        },

        {
            id: 4,
            name: "Maya Chen",
            job: "Front-End Developer",
            img: dev
        },

        {
            id: 5,
            name: "Oliver Russo",
            job: " Creative Director",
            img: designer
        },

        {
            id: 6,
            name: "Elena Novikova",
            job: "Brand Experience Designer",
            img: boss
        },



    ];

  return (
    <div className='w-full min-h-screen p-12 text-white  relative'>
          <div className='bg-gradient-to-tl from-red-400 to-transparent opacity-50 rounded-full w-96 h-96 absolute -top-20 -left-24 animate-pulse -z-10'></div>
        <div className='bg-gradient-to-br from-green-400 to-transparent opacity-50 rounded-full w-80 h-80 absolute -bottom-10 -right-6 animate-pulse -z-10'></div>

        <h1 className='text-[4rem] p-12 story mt-[3rem]'>Our Team</h1>

        <div className='grid grid-cols-3 gap-12 '>
            {members.map((value) => (
                    <div key={value.id} className='flex flex-col gap-4 perspective-1000'>
                       <Image src={value.img} alt='developer' className='w-full shadow-lg shadow-black 
                       rounded-md transform  duration-500 ease-in-out hover:grayscale hover:rotate-x-30 '/>
                       <h2 className='text-2xl text-center underline underline-offset-8 decoration-[#F05A7E]'>{value.name}</h2>
                       <p className='text-center'>{value.job}</p>
                       <div className='flex items-center gap-6 justify-center'>
                          <Linkedin className='cursor-pointer duration-500 ease hover:text-[#F05A7E] hover:-translate-y-1' />
                          <Instagram className='cursor-pointer duration-500 ease hover:text-[#F05A7E] hover:-translate-y-1' />
                          <Mail className='cursor-pointer duration-500 ease hover:text-[#F05A7E] hover:-translate-y-1'  />
                        </div>
                    </div>
            ))}
        </div>
    </div>
  )
}

export default Members
