import React from 'react'
import CategoryMenu from './CategoryMenu'
import HeaderLinks from './HeaderLinks'
import HeroSection from './HeroSection'
import HeaderLogo from './HeaderLogo'

const Header = () => {
  return (
    <>
      <header className='absolute top-0 left-0 w-full h-[102px] z-20 bg-[rgba(0,0,0,0.07)] flex items-center px-6'>
        <HeaderLogo />
        <CategoryMenu />
        <div className='ml-auto'>
          <HeaderLinks />
        </div>
      </header>
      <div className='absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 z-30'>
        <HeroSection />
      </div>
    </>
  )
}

export default Header
