'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const Deals = () => {
  const deals = [
    {
      image: '/images/card1.jpg',
      title: '20% Off On Tops',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.',
      position: 'right',
    },
    {
      image: '/images/card2.jpg',
      title: 'Eyewear For You',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.',
      position: 'left',
    },
    {
      image: '/images/card3.jpg',
      title: 'Lets Suit Up!',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.',
      position: 'right',
    },
  ]

  return (
    <div className='container mx-auto px-4 sm:px-6 mb-20 md:mb-30'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7'>
        {deals.map((deal, index) => (
          <div
            key={index}
            className='relative group overflow-hidden rounded-lg h-[350px] md:h-[450px] lg:h-[500px]'
          >
            <Image
              src={deal.image}
              alt={deal.title}
              fill
              className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
                deal.position === 'left' ? 'object-left' : 'object-right'
              }`}
              quality={85}
            />

            {/* Gradient overlay */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10' />

            {/* Content */}
            <div className='absolute bottom-0 left-0 right-0 z-10 p-6 text-white'>
              <h2 className='font-bold text-2xl sm:text-3xl mb-3 tracking-wide'>
                {deal.title}
              </h2>
              <p className='mb-5 text-sm sm:text-base tracking-wider'>
                {deal.description}
              </p>
              <Button
                className='w-full sm:w-auto px-6 py-4 sm:py-5 text-sm sm:text-base font-medium transition-all hover:scale-105'
                variant='secondary'
              >
                Shop Now
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Deals
