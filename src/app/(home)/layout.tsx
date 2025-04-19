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
  return (
    <div className='flex flex-col min-h-screen'>
      <HeaderContainer
        img={pathname === '/about' ? '/images/banner4.jpg' : '/images/hero.jpg'}
        classes={
          pathname === '/about'
            ? 'relative min-h-[70vh] md:min-h-[80vh] w-full overflow-hidden'
            : 'relative min-h-[70vh] md:min-h-[80vh] lg:min-h-screen w-full overflow-hidden'
        }
      />
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
      <main className='flex-1 w-full min-w-0 mx-auto'>{children}</main>
      <Footer />
    </div>
  )
}
