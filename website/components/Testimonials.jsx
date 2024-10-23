"use client"
import React, { useState } from 'react'
import dev from '../assets/developer.jpg'
import designer from '../assets/designer.jpg'
import design from '../assets/3d.jpg'
import boss from '../assets/boss.jpg'
import Image from 'next/image'

const Testimonials = () => {

    const testimonialsData = [
        {
          id: 1,
          name: "John Doe",
          message: "This service was amazing! They exceeded all my expectations.",
          position: "CEO at Company",
          img: dev
        },
        {
          id: 2,
          name: "Jane Smith",
          message: "Incredible experience, truly outstanding support and delivery.",
          position: "Marketing Head at Agency",
          img: boss
        },
        {
          id: 3,
          name: "Sarah Johnson",
          message: "I would highly recommend them to anyone looking for great service.",
          position: "Project Manager at Startup",
          img: designer
        },
        {
            id: 4,
            name: "Sarah Johnson",
            message: "I would highly recommend them to anyone looking for great service.",
            position: "Project Manager at Startup",
            img: design
          },
    ];

    const [current, setCurrent] = useState(0);
    const length = testimonialsData.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
      };
    
      const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
      };

  return (
    <div className='w-full min-h-screen p-6 md:p-12 text-white relative'>
        <div className='bg-gradient-to-tl from-orange-400 to-transparent opacity-50 rounded-full w-60 h-60 md:w-96 md:h-96 absolute -top-10 md:-top-20 -left-10 md:-left-24 animate-pulse -z-10'></div>
        <div className='bg-gradient-to-br from-lime-400 to-transparent opacity-50 rounded-full w-60 h-60 md:w-80 md:h-80 absolute -bottom-6 md:-bottom-10 -right-4 md:-right-6 animate-pulse -z-10'></div>

        <h1 className='text-[2rem] md:text-[3rem] lg:text-[4rem] p-6 md:p-12 story mt-[2rem] md:mt-[3rem]'>What clients are saying</h1>

        <div className="flex flex-col items-center justify-center mt-8 md:mt-12">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={index === current ? "opacity-100 transition-opacity duration-1000 ease-in-out" : "opacity-0 absolute transition-opacity duration-1000 ease-in-out"}
          >
            {index === current && (
              <div className="text-center max-w-lg mx-auto p-4 md:p-6 flex flex-col gap-4">
                <Image src={testimonial.img} className='w-40 md:w-60 lg:w-80 m-auto rounded-full shadow-lg shadow-black'/>
                <p className="text-lg md:text-xl mb-4">"{testimonial.message}"</p>
                <h3 className="text-md md:text-lg font-bold">{testimonial.name}</h3>
                <p className="text-sm md:text-base">{testimonial.position}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4 md:gap-16 px-4 md:px-12">
        <button
          onClick={prevSlide}
          className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded-full w-full md:w-full text-sm md:text-base"
        >
          Previous
        </button>
        <button
          onClick={nextSlide}
          className="bg-lime-400 hover:bg-lime-500 text-white px-6 py-2 rounded-full w-full md:w-full text-sm md:text-base"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Testimonials
