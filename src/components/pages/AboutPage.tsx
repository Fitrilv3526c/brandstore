'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaTwitter, FaInstagram, FaGoogle } from 'react-icons/fa'
import Services from '../layout/services/Services'

const persons = [
  {
    id: 1,
    img: '/images/person1.png',
    name: 'Harvey Spector',
    post: 'Founder - CEO',
  },
  {
    id: 2,
    img: '/images/person2.png',
    name: 'Jessica Pearson',
    post: 'COO',
  },
  {
    id: 3,
    img: '/images/person3.png',
    name: 'Rachel Zain',
    post: 'Marketing Head',
  },
  {
    id: 4,
    img: '/images/person6.png',
    name: 'Luise Litt',
    post: 'Lead Developer',
  },
  {
    id: 5,
    img: '/images/person5.png',
    name: 'Katrina Bennett',
    post: 'Intern Designer',
  },
  {
    id: 6,
    img: '/images/person4.png',
    name: 'Mike Ross',
    post: 'Intern Designer',
  },
]

const socialLinks = [
  { icon: <FaFacebookF />, href: 'https://www.facebook.com' },
  { icon: <FaTwitter />, href: 'https://www.twitter.com' },
  { icon: <FaInstagram />, href: 'https://www.instagram.com' },
  { icon: <FaGoogle />, href: 'https://www.google.com' },
]

const AboutPage = () => {
  return (
    <div>
      <div className='bg-[#f5f7f9]'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-7 px-4 md:px-8 lg:px-16 py-10 md:py-16 lg:py-20'>
          <div className='bg-white px-6 md:px-10 lg:px-20 py-10 md:py-16 lg:py-24 flex flex-col justify-between'>
            <span className='block h-1 w-20 bg-blue-600 mb-4'></span>
            <h2 className='text-2xl md:text-4xl lg:text-[45px] tracking-wide font-bold mb-4'>
              Who We Are
            </h2>
            <p className='text-sm md:text-base'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam
              nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris
              vitae erat consequat auctor eu in elit.
            </p>
          </div>
          <div className='w-full h-auto'>
            <Image
              src='/images/banner6.jpg'
              alt='banner6'
              width={800}
              height={800}
              className='object-cover w-full h-full max-h-[500px] rounded-md'
              sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px'
            />
          </div>
        </div>
      </div>

      <div className='bg-white flex flex-col items-center justify-center py-30 px-7 sm:px-16'>
        <div className='flex flex-col items-center justify-between max-w-[800px] w-full h-[230px]'>
          <span className='block h-1 w-22 bg-blue-600 '></span>
          <h3 className='text-2xl font-semibold '>A few Words About</h3>
          <h2 className='text-4xl font-bold'>OUR TEAM</h2>
          <p className='text-center tracking-wide mx-3'>
            Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris
            vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra.
          </p>
        </div>
        <div className='grid grid-cols-1 xs-grid-col-2 sm:grid-cols-2 md:!grid-cols-3 gap-7 mt-24 items-center'>
          {persons.map((person) => (
            <div
              key={person.id}
              className='w-[215px] h-[215px] border bg-[#f5f7f9] flex flex-col gap-3 justify-center items-center'
            >
              <div className='relative w-full aspect-[1/1] max-w-[100px]'>
                <Image
                  src={person.img}
                  alt={person.name}
                  fill
                  className='object-contain'
                  sizes='(max-width: 768px) 50vw, 100px'
                />
              </div>
              <h3 className='font-bold text-xl'>{person.name}</h3>
              <p className='text-gray-600'>{person.post}</p>
            </div>
          ))}
        </div>
      </div>

      <div
        className='relative h-[350px] sm:h-[400px] md:h-[500px] bg-cover bg-center bg-fixed mb-8 md:mb-30'
        style={{ backgroundImage: 'url(/images/banner5.jpg)' }}
      >
        <div className='absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.5)_0%)]'></div>

        <div className='absolute top-1/2 left-1/2 transform translate-x-[-160px] sm:translate-x-[-180px] md:-translate-x-1/4 translate-y-[-175px] sm:translate-y-[-200px]  md:-translate-y-1/2 w-full max-w-[90%] md:max-w-[700px] h-[500px] z-20'>
          <div className='bg-[#f5f7f9] w-[300px] sm:w-[400px] h-[350px] sm:h-[400px] md:h-[500px] flex flex-col gap-10 justify-center items-center'>
            <span className='block h-1 w-22 bg-blue-600 '></span>
            <h2 className='text-4xl font-bold'>Follow Us</h2>
            <div className=' flex items-center gap-10'>
              {socialLinks.map((socialLink) => (
                <Link
                  href={socialLink.href}
                  key={socialLink.href}
                  className='text-xl hover:text-blue-500'
                >
                  {socialLink.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='px-24 pb-32'>
        <Services />
      </div>
    </div>
  )
}

export default AboutPage
