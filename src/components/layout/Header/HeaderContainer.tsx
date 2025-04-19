import Header from './Header'
import Image from 'next/image'
// import HeroSection from './HeroSection'

interface props{
  img:string
  classes : string
}

const HeaderContainer = ({img, classes} : props) => {
  return (
    <div className={classes}>
      <Image
        src={img}
        alt='Hero Background'
        fill
        className='object-cover bg-center bg-fixed'
        quality={90}
        priority
      />

      {/* Gradient overlay */}
      <div className='absolute inset-0 z-10 bg-gradient-to-b from-[rgba(0,132,214,0.4)] to-[rgba(0,0,0,0.5)]'></div>
      <Header
        bgColor='bg-black/10'
        textColor='text-white'
        blur='backdrop-blur-sm'
        headerLogo='/images/logo.png'
        cartNumBGColor='bg-white'
        cartNumColor='text-black'
        headerPosition='absolute top-0 left-0 z-20 '
      />
      {/* Hero Section Positioning */}
      {/* <div className='absolute top-1/2 left-1/2 w-full px-4 sm:px-6 transform -translate-x-1/2 -translate-y-1/2 z-30 text-center md:text-left md:left-[40%] lg:left-1/3 xl:left-1/4 md:w-[80%] lg:w-[70%] xl:w-[60%]'>
        <HeroSection />
      </div> */}
    </div>
  )
}

export default HeaderContainer
