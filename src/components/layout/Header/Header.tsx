'use client'
import CategoryMenu from './CategoryMenu'
import HeaderLinks from './HeaderLinks'
import HeroSection from './HeroSection'
import HeaderLogo from './HeaderLogo'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  // SheetHeader,
  // SheetTitle,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import CartButton from '@/components/cart/CartButton'
import MobileHeaderLinks from './MobileHeaderLinks'
// import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

const Header = () => {
  return (
    <>
      <header className='absolute top-0 left-0 w-full h-16 sm:h-20 md:h-24 z-20 bg-black/10 backdrop-blur-sm flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12'>
        <div className='flex items-center gap-4 md:gap-6 lg:gap-8'>
          <HeaderLogo />
          <div className='hidden lg:flex'>
            <CategoryMenu />
          </div>
        </div>

        {/* Mobile Menu */}
        <div className='flex items-center lg:hidden gap-4'>
          <CartButton />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant='ghost' size='icon' className='text-white'>
                <Menu className='h-6 w-6 sm:h-8 sm:w-8' />
              </Button>
            </SheetTrigger>
            <SheetContent side='left' className='w-[280px] sm:w-[350px]'>
              <MobileHeaderLinks />
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Menu */}
        <div className='hidden lg:flex items-center gap-6'>
          <HeaderLinks />
        </div>
      </header>

      {/* Hero Section Positioning */}
      <div className='absolute top-1/2 left-1/2 w-full px-4 sm:px-6 transform -translate-x-1/2 -translate-y-1/2 z-30 text-center md:text-left md:left-[40%] lg:left-1/3 xl:left-1/4 md:w-[80%] lg:w-[70%] xl:w-[60%]'>
        <HeroSection />
      </div>
    </>
  )
}

export default Header
