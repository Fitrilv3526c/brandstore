import Header from './Header'
import Image from 'next/image'

const HeaderContainer = () => {
  return (
    <div className='relative min-h-[70vh] md:min-h-[80vh] lg:min-h-screen w-full overflow-hidden'>
      {/* Next.js Image for better performance */}
      <Image
        src='/images/hero.jpg'
        alt='Hero Background'
        fill
        className='object-cover bg-center bg-fixed'
        quality={90}
        priority
      />

      {/* Gradient overlay */}
      <div className='absolute inset-0 z-10 bg-gradient-to-b from-[rgba(0,132,214,0.4)] to-[rgba(0,0,0,0.5)]'></div>
      <Header />
    </div>
  )
}

export default HeaderContainer
