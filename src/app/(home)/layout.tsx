'use client'
import Footer from '@/components/layout/Footer/Footer'
import HeaderContainer from '@/components/layout/Header/HeaderContainer'
import HeroSection from '@/components/layout/Header/HeroSection'
import { usePathname } from 'next/navigation'

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()

  let img = '/images/hero.jpg'
  let classes =
    'relative min-h-[70vh] md:min-h-[80vh] lg:min-h-screen w-full overflow-hidden'

  if (pathname === '/about') {
    img = '/images/banner4.jpg'
    classes = 'relative min-h-[70vh] md:min-h-[80vh] w-full overflow-hidden'
  } else if (pathname === '/contact') {
    img = '/images/banner12.jpg'
    classes = 'relative min-h-[50vh] md:min-h-[60vh] w-full overflow-hidden'
  }

  return (
    <div className='flex flex-col min-h-screen'>
      {/* pathname === '/about' ? '/images/banner4.jpg' : '/images/hero.jpg' */}
      <HeaderContainer img={img} classes={classes} />
      {pathname === '/' && (
        <div className='absolute top-1/2 left-1/2 w-full px-4 sm:px-6 transform -translate-x-1/2 -translate-y-1/2 z-30 text-center md:text-left md:left-[40%] lg:left-1/3 xl:left-1/4 md:w-[80%] lg:w-[70%] xl:w-[60%]'>
          <HeroSection />
        </div>
      )}

      {pathname === '/about' && (
        <div className='absolute z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[calc(50%+80px)]'>
          <h1 className='text-5xl font-bold text-white'>About Us</h1>
        </div>
      )}

      {pathname === '/contact' && (
        <div className='absolute z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[calc(50%+180px)] sm:-translate-y-[calc(50%+140px)]'>
          <h1 className='text-4xl sm:text-6xl font-bold text-white'>
            Contact Us
          </h1>
        </div>
      )}
      <main className='flex-1 w-full min-w-0 mx-auto'>{children}</main>
      <Footer />
    </div>
  )
}
