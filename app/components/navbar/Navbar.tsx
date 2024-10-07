import React from 'react'
import Logo from '@/public/car-dealership-logo.svg'
import Link from 'next/link'
import Image from 'next/image'
import UserNav from './UserNav'

const Navbar = () => {
  return (
    <nav className='w-full sticky top-0 left-0 pt-6 border-b bg-white'>
      <div className='max-w-[1500px] mx-auto px-6'>
        <div className='flex justify-between items-center'>

          <Link href='/'>
              <Image
              src={Logo}
              alt='logo'
              width={120}
              className='object-contain'
              />
          </Link>
          <h1 className='text-3xl font-bold'>Choose your car!</h1>
          <div className='flex items-center px-7'>
              <UserNav />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar