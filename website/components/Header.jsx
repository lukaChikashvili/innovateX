import Link from 'next/link'
import React from 'react'
import { MoveRight } from 'lucide-react'

const Header = () => {
  return (
    <div className='w-full flex items-center justify-between p-8 px-16 text-white'>
        <h1 className='text-2xl'>InnovateX</h1>

        <nav className='hidden md:flex gap-8 text-xl '>
            <Link href='/'>Features</Link>
            <Link href='/about'>Services</Link>
            <Link href = '/contact'>Contact</Link>
            <Link href = '/contact'>More</Link>
        </nav>

        <Link href = "/" className='flex items-center gap-4'> Gete Started <MoveRight /> </Link>
    </div>
  )
}

export default Header
