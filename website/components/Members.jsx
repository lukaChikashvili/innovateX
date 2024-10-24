"use client"

import React, { useEffect, useRef } from 'react'
import dev from '../assets/developer.jpg'
import designer from '../assets/designer.jpg'
import design from '../assets/3d.jpg'
import boss from '../assets/boss.jpg'
import devel from '../assets/dev.jpg'
import dir from '../assets/dir.jpg'
import Image from 'next/image';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type'
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger);

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
            img: devel
        },

        {
            id: 5,
            name: "Oliver Russo",
            job: "Creative Director",
            img: dir
        },

        {
            id: 6,
            name: "Elena Novikova",
            job: "Brand Experience Designer",
            img: boss
        },
    ];

    const titleRef = useRef(null);

    useEffect(() => {
        const titleText = new SplitType(titleRef.current, {types: 'chars'});

        gsap.fromTo(titleText.chars, 
          {
            y: 100, opacity: 0
          },
          {
            y: 0,
            opacity: 1,
          
            duration: 2.5,
            ease: 'power4.out',
            delay: 5,
            scrollTrigger: {
              trigger: titleRef.current,
              start: 'top 80%',
              end: 'top 10%',
              scrub: true,
              
            }
          });

          gsap.fromTo('.images img', 
            {
              y: 100, opacity: 0,
              delay: 5,
              duration: 2,
              stagger: 0.05
            },
            {
              y: 0,
              opacity: 1,
              
              
              ease: 'power4.out',
              scrollTrigger: {
                trigger: titleRef.current,
                start: 'top 80%',
                end: 'top 10%',
                scrub: true,
                
              }
            });



    }, [])

    return (
        <div className='w-full min-h-screen p-8 md:p-12 text-white relative'>
            <div className='bg-gradient-to-tl from-red-400 to-transparent opacity-50 rounded-full w-60 h-60 md:w-96 md:h-96 absolute -top-10 md:-top-20 -left-10 md:-left-24 animate-pulse -z-10'></div>
            <div className='bg-gradient-to-br from-green-400 to-transparent opacity-50 rounded-full w-60 h-60 md:w-80 md:h-80 absolute -bottom-6 md:-bottom-10 -right-4 md:-right-6 animate-pulse -z-10'></div>

            <h1 ref={titleRef} className='text-[2rem] md:text-[3rem] lg:text-[4rem] p-6 md:p-12 story mt-[2rem] md:mt-[3rem]'>Our Team</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12'>
                {members.map((value) => (
                    <div key={value.id} className='flex flex-col gap-4 images'>
                        <Image 
                            src={value.img} 
                            alt={value.name} 
                            className='w-full shadow-lg shadow-black rounded-md transform duration-500 ease-in-out hover:grayscale hover:rotate-x-30' 
                        />
                        <h2 className='text-xl md:text-2xl text-center underline underline-offset-8 decoration-[#F05A7E]'>{value.name}</h2>
                        <p className='text-center'>{value.job}</p>
                        <div className='flex items-center gap-4 md:gap-6 justify-center'>
                            <Linkedin className='cursor-pointer duration-500 ease hover:text-[#F05A7E] hover:-translate-y-1' />
                            <Instagram className='cursor-pointer duration-500 ease hover:text-[#F05A7E] hover:-translate-y-1' />
                            <Mail className='cursor-pointer duration-500 ease hover:text-[#F05A7E] hover:-translate-y-1' />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Members
