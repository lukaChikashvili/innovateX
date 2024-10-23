import Image from 'next/image'
import React from 'react'
import img from '../assets/image.jpg'

const Story = () => {
  return (
    <div className='w-full min-h-screen p-8 md:p-12 text-white relative'>
      <h1 className='text-[2rem] md:text-[3rem] lg:text-[4rem] p-6 md:p-12 story'>
        Our story
      </h1>

      <div className='flex flex-col lg:flex-row items-center justify-between px-4 md:px-[4rem]'>
        <div className='flex flex-col gap-4 md:gap-8'>
          <p className='w-full md:w-4/5 text-[1.1rem] md:text-[1.3rem] lg:text-[1.5rem]'>
            Our journey started in a cozy corner of Tbilisi, fueled by a desire to transform the web landscape. From the beginning, we understood that every brand has a unique story to tell. We set out to craft tailored solutions that not only reflect our clients’ values but also resonate with their target audiences.
          </p>

          <p className='w-full md:w-4/5 text-[1.1rem] md:text-[1.3rem] lg:text-[1.5rem]'>
            At InnovateX, we believe in collaboration and transparency. We partner with our clients to understand their goals, challenges, and aspirations. This approach allows us to create innovative strategies that drive results and foster lasting relationships.
          </p>
        </div>

        <Image
          src={img}
          className='w-[20rem] md:w-[25rem] lg:w-[30rem] rounded-full shadow-black shadow-lg duration-500 grayscale-0 ease hover:grayscale mt-8 lg:mt-0'
        />

        
        <div className='bg-gradient-to-tl from-pink-400 to-transparent opacity-50 rounded-full w-60 h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 absolute -top-10 md:-top-20 -left-10 md:-left-24 animate-pulse'></div>
        <div className='bg-gradient-to-br from-blue-400 to-transparent opacity-50 rounded-full w-60 h-60 md:w-80 md:h-80 lg:w-80 lg:h-80 absolute -bottom-6 md:-bottom-10 -right-4 md:-right-6 animate-pulse'></div>
      </div>
    </div>
  )
}

export default Story
