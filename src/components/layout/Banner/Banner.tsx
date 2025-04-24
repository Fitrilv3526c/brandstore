'use client'
import { Button } from '@/components/ui/button'
import React from 'react'

const Banner = () => {
  return (
    <div
      className='relative h-[350px] sm:h-[400px] md:h-[500px] bg-cover bg-center bg-fixed mb-8 md:mb-30'
      style={{ backgroundImage: 'url(/images/banner-03.jpg)' }}
    >
      {/* Gradient overlay */}
      <div className='absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(0,132,214,0.4)_-50%,#ffffff00)]'></div>

      {/* Content container */}
      <div className='absolute pt-8 sm:pt-12 md:pt-24 px-4 sm:px-8 md:px-20 w-full max-w-[90%] md:max-w-[700px] h-auto z-20 text-white'>
        <h3 className='font-bold text-lg sm:text-xl md:text-2xl mb-4 sm:mb-5 md:mb-7'>
          Limited Time Offer
        </h3>
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 sm:mb-4 md:mb-5'>
          Special Edition
        </h1>
        <p className='tracking-wider text-sm sm:text-base mb-4 sm:mb-5 md:mb-7'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <h3 className='font-bold text-base sm:text-lg md:text-xl mb-6 sm:mb-7 md:mb-9'>
          Buy This T-shirt At 20% Discount, Use Code OFF20
        </h3>
        <Button className='btn px-4 sm:px-6 md:px-9 py-3 sm:py-5 md:py-7 text-sm sm:text-base md:text-[20px]'>
          Shop Now
        </Button>
      </div>
    </div>
  )
}

export default Banner
