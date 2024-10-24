"use client"
import { ChevronsDown } from 'lucide-react';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type'




const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const scrollRef = useRef(null);


  useEffect(() => {
      const titleText = new SplitType(titleRef.current, {types: 'chars'});

      gsap.set(titleText.chars, { display: 'inline-block' });
     

      gsap.fromTo(titleText.chars, 
        { y: 100, opacity: 0},
        { y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 2,
          ease: 'power4.out',});

          gsap.fromTo(
            subtitleRef.current,
            { y: 20, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.5,
              ease: 'power4.out',
              delay: 0.9, 
            }
          );

          gsap.fromTo(
            scrollRef.current,
            { y: 20, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.5,
              ease: 'power4.out',
              delay: 1, 
            }
          );
  }, [])

  return (
    <div className='w-full max-w-screen-lg m-auto min-h-screen flex items-center justify-center text-white px-4 lg:px-0'>
      <div className='absolute w-full h-screen top-0 left-0 -z-10'>
        <div className='bg-gradient-to-tl from-blue-400 to-transparent opacity-50 rounded-full w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 absolute -top-10 sm:-top-16 -left-16 animate-pulse circle'></div>
        <div className='bg-gradient-to-br from-pink-400 to-transparent opacity-50 rounded-full w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 absolute -bottom-6 sm:-bottom-10 -right-4 lg:-right-6 animate-pulse circle2'></div>
      </div>

      <div className='flex items-center flex-col justify-center gap-6 sm:gap-8 -mt-[2rem] md:-mt-[4rem]'>
        <h1 ref={titleRef} className=' text-5xl sm:text-6xl md:text-8xl lg:text-9xl  text-center title leading-tight'>
          Design the Future Today
        </h1>

        <h2 ref={subtitleRef} className='text-lg sm:text-xl md:text-xl lg:text-xl text-center'>
          We blend <span className='text-[#F05A7E] font-bold'>creativity</span> and{' '}
          <span className='text-[#F05A7E] font-bold'>technology</span> to deliver groundbreaking digital experiences
        </h2>

        <div className='mt-6 sm:mt-8'>
          <p ref={scrollRef} className='flex items-center gap-4 animate-fade-bounce text-base sm:text-lg md:text-xl'>
            Scroll to explore <ChevronsDown className='arrow-icon' />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
