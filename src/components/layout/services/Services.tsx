'use client'
import { ImEarth } from 'react-icons/im'
import { FaAward } from 'react-icons/fa'
import { IoPricetagsOutline } from 'react-icons/io5'
import { FaLock } from 'react-icons/fa6'

const Services = () => {
  const services = [
    {
      icon: ImEarth,
      title: 'Worldwide Shipping',
      description:
        'It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    },
    {
      icon: FaAward,
      title: 'Best Quality',
      description:
        'It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    },
    {
      icon: IoPricetagsOutline,
      title: 'Best Offers',
      description:
        'It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    },
    {
      icon: FaLock,
      title: 'Secure Payments',
      description:
        'It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    },
  ]

  return (
    <div className='flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 px-4 sm:px-0'>
      {services.map((service) => (
        <div
          key={service.title}
          className='flex flex-col items-center justify-center w-full sm:w-[calc(50%-1rem)] md:w-[calc(25%-1.5rem)] min-w-0 p-4 sm:p-6'
        >
          <span>
            <service.icon className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-5 md:mb-7 text-gray-700' />
          </span>
          <h2 className='text-lg sm:text-xl font-semibold mb-3 sm:mb-4 md:mb-5 text-center'>
            {service.title}
          </h2>
          <p className='text-center text-sm sm:text-base text-gray-500 tracking-wide leading-relaxed'>
            {service.description}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Services
