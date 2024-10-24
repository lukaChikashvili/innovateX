"use client"
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import img from '../assets/image.jpg'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type'
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger);


const Story = () => {

const titleRef = useRef(null);
const paragraphRefs = useRef([]);
paragraphRefs.current = [];
const imageRef = useRef(null);

useEffect(() => {
    const titleText = new SplitType(titleRef.current, {types: 'chars'});

    gsap.fromTo(titleText.chars, 
      {
        y: 100, opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        stagger: {
            amount: 0.5,
            from: "start"
        },
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


      gsap.fromTo(imageRef.current, 
        {
          y: 300, opacity: 0,
          delay: 5,
        },
        {
          y: 0,
          opacity: 1,
         
          duration: 2.5,
          ease: 'power4.out',
          
          
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            end: 'top 10%',
            scrub: true,
            
          }
        });

      


      paragraphRefs.current.forEach((paragraph, index) => {
        const splitParagraph = new SplitType(paragraph, {types: 'words'});
        gsap.set(splitParagraph.words, { display: 'inline-block' });

        gsap.fromTo(
          splitParagraph.words,
          { y: 100, opacity: 0 }, 
          {
            y: 0,
            opacity: 1,
            stagger: 0.05,
            duration: 2.5,
            ease: 'power2.out',
            
            scrollTrigger: {
              trigger: paragraph,
              start: 'top 80%',
              end: 'top 20%',
              scrub: true,
              
            },
          }
        );
      });

    
   
}, []);

const addToRefs = (el) => {
  if (el && !paragraphRefs.current.includes(el)) {
    paragraphRefs.current.push(el);
  }
};

  return (
    <div className='w-full min-h-screen p-8 md:p-12 text-white relative'>
      <h1 ref={titleRef} className='text-[2rem] md:text-[3rem] lg:text-[4rem] p-6 md:p-12 story'>
        Our story
      </h1>

      <div className='flex flex-col lg:flex-row items-center justify-between px-4 md:px-[4rem]'>
        <div className='flex flex-col gap-4 md:gap-8'>
          <p ref={addToRefs} className='w-full md:w-4/5 text-[1.1rem] md:text-[1.3rem] lg:text-[1.5rem]'>
            Our journey started in a cozy corner of Tbilisi, fueled by a desire to transform the web landscape. From the beginning, we understood that every brand has a unique story to tell. We set out to craft tailored solutions that not only reflect our clients’ values but also resonate with their target audiences.
          </p>

          <p ref={addToRefs} className='w-full md:w-4/5 text-[1.1rem] md:text-[1.3rem] lg:text-[1.5rem]'>
            At InnovateX, we believe in collaboration and transparency. We partner with our clients to understand their goals, challenges, and aspirations. This approach allows us to create innovative strategies that drive results and foster lasting relationships.
          </p>
        </div>

        <Image ref={imageRef}
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
