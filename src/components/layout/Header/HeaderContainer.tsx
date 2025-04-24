'use client'
import Header from './Header'
import Image from 'next/image'

interface props {
  img: string
  classes: string
}

const HeaderContainer = ({ img, classes }: props) => {
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
        headerLogo='/images/logo.png'
        cartNumBGColor='bg-white'
        cartNumColor='text-black'
        headerPosition='absolute top-0 left-0 z-20 '
      />
    </div>
  )
}

export default HeaderContainer
