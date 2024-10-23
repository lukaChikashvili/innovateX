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
    <div  className='w-full min-h-screen p-12 text-white  relative'>
        <div className='bg-gradient-to-tl from-orange-400 to-transparent opacity-50 rounded-full w-96 h-96 absolute -top-20 -left-24 animate-pulse -z-10'></div>
        <div className='bg-gradient-to-br from-lime-400 to-transparent opacity-50 rounded-full w-80 h-80 absolute -bottom-10 -right-6 animate-pulse -z-10'></div>

        <h1 className='text-[4rem] p-12 story mt-[3rem]'>What clients are saying</h1>

        <div className="flex flex-col items-center justify-center mt-12">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={
              index === current
                ? "opacity-100 transition-opacity duration-1000 ease-in-out"
                : "opacity-0 absolute transition-opacity duration-1000 ease-in-out"
            }
          >
            {index === current && (
              <div className="text-center max-w-2xl mx-auto p-6 flex flex-col gap-4  ">
                <Image src={testimonial.img} className='w-80 m-auto rounded-full shadow-lg shadow-black'/>
                <p className="text-xl mb-4">"{testimonial.message}"</p>
                <h3 className="text-lg font-bold">{testimonial.name}</h3>
                <p className="text-sm">{testimonial.position}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-6 gap-16 px-12">
        <button
          onClick={prevSlide}
          className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-full w-full"
        >
          Previous
        </button>
        <button
          onClick={nextSlide}
          className="bg-lime-400 hover:bg-lime-500 text-white px-4 py-2 rounded-full w-full"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Testimonials
