import { Mail, MapPin, Phone } from 'lucide-react';
import React from 'react'

const Footer = () => {
   
    const links = [
        "About", "Services", "Case Studies", "Contact"
    ];


  return (
    <div className='w-full  min-h-36 opacity-60 p-4 flex '>
        <div>
      {
        links.map((value, i) => (
            <div key={i} className='flex flex-col   px-12 py-2 '>
                <p className='text-white cursor-pointer underline-offset-8 text-xl duration-500 ease hover:underline'>{value}</p>
           </div>
        ))
      }
      </div>

<div className='flex flex-col gap-4  justify-center'>
    <p className='flex items-center gap-4 text-white cursor-pointer underline-offset-8  text-xl duration-500 ease hover:underline'><Mail /> info@InnovateX.com</p>
    <p className='flex items-center gap-4 text-white cursor-pointer underline-offset-8 text-xl duration-500 ease hover:underline'><Phone /> (123) 456-7890</p>
    <p className='flex items-center gap-4 text-white cursor-pointer underline-offset-8 text-xl duration-500 ease hover:underline'> <MapPin /> 123 Future Blvd, Tech City</p>
</div>
</div>
   
  )
}

export default Footer
