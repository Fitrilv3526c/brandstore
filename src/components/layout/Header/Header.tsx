'use client'
import CategoryMenu from './CategoryMenu'
import HeaderLinks from './HeaderLinks'
import HeroSection from './HeroSection'
import HeaderLogo from './HeaderLogo'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import CartButton from '@/components/cart/CartButton'
import MobileHeaderLinks from './MobileHeaderLinks'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

const Header = () => {
  return (
    <>
      <header className='absolute top-0 left-0 w-full h-[102px] z-20 bg-[rgba(0,0,0,0.07)] flex items-center justify-between md: px-2 lg:px-6'>
        <div className='flex items-center lg:gap-8'>
          <HeaderLogo />
          <div className='hidden gap-6  lg:flex'>
            <CategoryMenu />
          </div>
        </div>

        <div className='flex items-center lg:hidden'>
          <Sheet>
            <CartButton />
            <SheetTrigger asChild>
              <Button
                className='bg-black text-white ml-7 cursor-pointer'
                size='icon'
              >
                <Menu className='h-8 w-8' />
              </Button>
            </SheetTrigger>
            <SheetContent side='left' className='w-64 sm:w-[350px]'>
              <SheetHeader>
                <SheetTitle>
                  <VisuallyHidden>Hidden Sheet Title</VisuallyHidden>
                </SheetTitle>
              </SheetHeader>
              <div className='flex flex-col gap-4 mt-8'>
                <MobileHeaderLinks />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Menu */}
        <div className='hidden lg:flex gap-6'>
          <HeaderLinks />
        </div>
        {/* <HeaderLogo />
        <CategoryMenu /> */}
        {/* <div className='ml-auto'>
          <HeaderLinks />
        </div> */}
      </header>
      <div className='left-1/2 absolute top-1/2 md:left-[38%] lg:left-1/3 xl:left-1/4 transform -translate-x-1/2 -translate-y-1/2 z-30'>
        <HeroSection />
      </div>
    </>
  )
}

export default Header
