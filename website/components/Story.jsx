import Image from 'next/image'
import React from 'react'
import img from '../assets/image.jpg'

const Story = () => {
  return (
    <div className='w-full min-h-screen p-12 text-white relative '>
        <h1 className='text-[4rem] p-12 story'>Our story</h1>
      

        <div className='flex items-center justify-between px-[4rem] '>
          <div className='flex flex-col gap-8'>
          <p className='w-4/5 text-[1.5rem]'>
          Our journey started in a cozy corner of Tbilisi, fueled by a desire to transform the web landscape. From the beginning, we understood that every brand has a unique story to tell. We set out to craft tailored solutions that not only reflect our clients’ 
          values but also resonate with their target audiences.

          </p>

          <p className='w-4/5 text-[1.5rem]'>
          At InnovateX, we believe in collaboration and transparency. We partner with our clients to understand their goals, challenges, and aspirations. This approach allows us to create innovative strategies that drive results and foster lasting relationships.
          </p>

          </div>
           <Image src = {img} className='w-[30rem] rounded-full shadow-black shadow-lg 
           duration-500 grayscale-0 ease hover:grayscale' />

           <div className='bg-gradient-to-tl from-pink-400 to-transparent opacity-50 rounded-full w-96 h-96 absolute -top-20 -left-24 animate-pulse'></div>
        <div className='bg-gradient-to-br from-blue-400 to-transparent opacity-50 rounded-full w-80 h-80 absolute -bottom-10 -right-6 animate-pulse'></div>
        </div>
    </div>
  )
}

export default Story
