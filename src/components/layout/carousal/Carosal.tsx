'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'
import { useRef } from 'react'

const Carosal = () => {
  const clientLogos = [
    '/images/client1.png',
    '/images/client2.png',
    '/images/client3.png',
    '/images/client4.png',
    '/images/client5.png',
  ]

  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }))

  return (
    <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-15 md:py-20'>
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: 'center',
          loop: true,
          breakpoints: {
            '(min-width: 640px)': { active: true, align: 'center' },
            '(min-width: 768px)': { active: true, align: 'start' },
          },
        }}
        className='w-full'
      >
        <div className='relative'>
          <CarouselPrevious className='hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white/80 hover:bg-white' />
          <CarouselContent>
            {[...clientLogos, ...clientLogos, ...clientLogos].map(
              (logo, index) => (
                <CarouselItem
                  key={`${logo}-${index}`}
                  className='basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 px-2'
                >
                  <div className='flex items-center justify-center p-2 sm:p-4 h-full'>
                    <Image
                      src={logo}
                      alt={`client-logo-${index + 1}`}
                      width={120}
                      height={80}
                      className='w-auto h-12 sm:h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition-all duration-300'
                      style={{
                        maxWidth: '100%',
                        height: 'auto',
                      }}
                    />
                  </div>
                </CarouselItem>
              )
            )}
          </CarouselContent>
          <CarouselNext className='hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white/80 hover:bg-white' />
        </div>
      </Carousel>
    </div>
  )
}

export default Carosal
