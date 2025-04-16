import { Button } from '@/components/ui/button'
import React from 'react'

const Deals = () => {
  return (
    <div className='block  md:flex justify-center md:gap-7 mb-30'>
      <div
        style={{
          backgroundImage: 'url(/images/card1.jpg)',
          backgroundPosition: 'top right',
        }}
        className='relative mt-5 md:mt-0 w-full md:w-[400px] h-[500px] bg-no-repeat bg-cover'
      >
        {/* overlay */}
        <div className='absolute inset-0 bg-black opacity-40' />

        <div className='relative z-30 '>
          <div className='absolute top-56 md:top-50 lg:top-64 text-white left-4 xl:left-5'>
            <h2 className='font-bold text-3xl mb-4 tracking-wide'>
              20% Off On Tops
            </h2>
            <p className='mb-5 tracking-wider md:text-center lg:text-left'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac
              dictum.
            </p>
            <Button className='btn px-6 py-6 text-[16px]'>Shop Now</Button>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage: 'url(/images/card2.jpg)',
          backgroundPosition: 'top left',
        }}
        className='relative mt-5 md:mt-0 w-full md:w-[400px] h-[500px] bg-no-repeat bg-cover'
      >
        {/* overlay */}
        <div className='absolute inset-0 bg-black opacity-40' />

        <div className='relative z-30 '>
          <div className='absolute top-56 md:top-50 lg:top-64 text-white left-4 xl:left-5'>
            <h2 className='font-bold text-3xl mb-4 '> Eyewear For You</h2>
            <p className='mb-5 tracking-wider md:text-center lg:text-left'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac
              dictum.
            </p>
            <Button className='btn px-6 py-6 text-[16px]'>Shop Now</Button>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage: 'url(/images/card3.jpg)',
          backgroundPosition: 'top right',
        }}
        className='relative mt-5 md:mt-0 w-full  md:w-[400px] h-[500px] bg-no-repeat bg-cover'
      >
        {/* overlay */}
        <div className='absolute inset-0 bg-black opacity-40' />

        <div className='relative z-30 '>
          <div className='absolute top-56 md:top-50 lg:top-64 text-white left-4 xl:left-5'>
            <h2 className='font-bold text-3xl mb-4 tracking-wide'>
              Lets Suit Up!
            </h2>
            <p className='mb-5 tracking-wider md:text-center lg:text-left'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac
              dictum.
            </p>
            <Button className='btn px-6 py-6 text-[16px]'>Shop Now</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Deals
