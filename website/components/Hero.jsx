import {  ChevronsDown } from 'lucide-react'
import React from 'react'

const Hero = () => {
  return (
    <div className='w-3/5 m-auto min-h-screen flex  items-center justify-center text-white '>

     <div className="absolute w-full h-screen top-0 left-0 -z-10 ">
        <div className='bg-gradient-to-tl from-blue-400 to-transparent opacity-50 rounded-full w-96 h-96 absolute -top-20 -left-20 animate-pulse'></div>
        <div className='bg-gradient-to-br from-pink-400 to-transparent opacity-50 rounded-full w-80 h-80 absolute -bottom-10 -right-6 animate-pulse'></div>
     </div>

<div className='flex items-center flex-col justify-center gap-8 -mt-[8rem]'>
        <h1 className='text-9xl text-center title'>Design the Future Today</h1>
        <h2 className='text-xl'>We blend <span className='text-[#F05A7E] font-bold'>creativity</span> and <span className='text-[#F05A7E] font-bold'>technology</span> to deliver groundbreaking digital experiences</h2>
          <div className='mt-[2rem]'>
              <p className='flex items-center gap-4 animate-fade-bounce'>Scroll to explore <ChevronsDown className='arrow-icon' /></p>
          </div>
        </div>

        

    </div>
  )
}

export default Hero
