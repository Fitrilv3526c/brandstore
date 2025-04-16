import { Button } from '@/components/ui/button'
import React from 'react'

const Banner = () => {
  return (
    <div
      className='relative h-[500px] bg-cover bg-center bg-fixed mb-30'
      style={{ backgroundImage: 'url(/images/banner-03.jpg)' }}
    >
      <div className='absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(0,132,214,0.4)_-50%,#ffffff00]'></div>

      <div className='absolute pt-24 px-20 w-[700px] h-[350px] z-20 text-white'>
        <h3 className='font-bold text-2xl mb-7'>Limited Time Offer</h3>
        <h1 className='text-5xl font-semibold mb-5'>Special Edition</h1>
        <p className='tracking-wider mb-7'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <h3 className='font-bold text-xl mb-9'>
          Buy This T-shirt At 20% Discount, Use Code OFF20
        </h3>
        <Button className='btn px-9 py-7 text-[20px]'>Shop Now</Button>
      </div>
    </div>
  )
}

export default Banner
