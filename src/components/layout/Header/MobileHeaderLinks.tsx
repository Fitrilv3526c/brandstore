'use client'
import { IoPerson } from 'react-icons/io5'
import Link from 'next/link'
import React from 'react'

const MobileHeaderLinks = () => {
  return (
    <div className='py-4'>
      <ul className='space-y-2'>
        {[
          {
            icon: <IoPerson className='w-6 h-6' />,
            text: 'Account',
            href: '/',
          },
          { text: 'EVERYTHING', href: '/product' },
          { text: 'WOMEN', href: '/products/Women' },
          { text: 'MEN', href: '/products/Men/' },
          { text: 'ACCESSORIES', href: '/products/Accessories' },
          { text: 'ABOUT', href: '/about' },
          { text: 'CONTACT US', href: '/contact' },
        ].map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className='flex items-center gap-3 p-4 hover:bg-gray-100 rounded-md transition-colors'
            >
              {item.icon && <span className='mr-2'>{item.icon}</span>}
              <span className='font-medium'>{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MobileHeaderLinks
