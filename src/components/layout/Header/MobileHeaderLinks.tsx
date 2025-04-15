import { IoPerson } from 'react-icons/io5'
import Link from 'next/link'
import React from 'react'

const MobileHeaderLinks = () => {
  return (
    <ul className='flex flex-col'>
      <Link
        href='/'
        className='cursor-pointer flex items-end  p-5 hover:bg-blue-100'
      >
        <IoPerson className='text-8xl' />
      </Link>

      <Link
        href='/'
        className='cursor-pointer border-b p-5 hover:bg-blue-100 font-semibold'
      >
        EVERYTHING
      </Link>
      <Link
        href='/'
        className='cursor-pointer border-b p-5 hover:bg-blue-100 font-semibold'
      >
        WOMEN
      </Link>
      <Link
        href='/'
        className='cursor-pointer border-b p-5 hover:bg-blue-100 font-semibold'
      >
        MEN
      </Link>
      <Link
        href='/'
        className='cursor-pointer border-b p-5 hover:bg-blue-100 font-semibold'
      >
        ACCESSORIES
      </Link>
      <Link
        href='/'
        className='cursor-pointer border-b p-5 hover:bg-blue-100 font-semibold'
      >
        ABOUT
      </Link>
      <Link
        href='/'
        className='cursor-pointer border-b p-5 hover:bg-blue-100 font-semibold'
      >
        CONTACT US
      </Link>
    </ul>
  )
}

export default MobileHeaderLinks
