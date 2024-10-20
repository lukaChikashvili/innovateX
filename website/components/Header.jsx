import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='w-full flex items-center justify-between px-12 py-2'>
        <h1>logo</h1>

        <nav className='flex gap-4'>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href = '/contact'>contact</Link>
        </nav>
    </div>
  )
}

export default Header
