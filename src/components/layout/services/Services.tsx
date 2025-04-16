import React from 'react'
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
    <div className='flex justify-center items-center flex-wrap'>
      {services.map((service) => {
        return (
          <div
            key={service.title}
            className='flex flex-col items-center justify-center w-[350px]'
          >
            <span>
              <service.icon className='text-7xl mb-7 text-gray-700' />
            </span>
            <h2 className='text-xl font-semibold mb-5'>{service.title}</h2>
            <p className='text-center text-gray-500 tracking-wide'>
              {service.description}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default Services
