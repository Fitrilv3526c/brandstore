'use client'
import CategoryMenu from './CategoryMenu'
import HeaderLinks from './HeaderLinks'
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

interface props {
  bgColor: string
  textColor: string
  headerLogo: string
  cartNumColor: string
  cartNumBGColor: string
  headerPosition?: string
}

const Header = ({
  bgColor,
  textColor,
  headerLogo,
  cartNumBGColor,
  cartNumColor,
  headerPosition,
}: props) => {
  return (
    <>
      <header
        className={`${headerPosition} w-full h-16 sm:h-20 md:h-24 ${bgColor}  flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12`}
      >
        <div className='flex items-center gap-4 md:gap-6 lg:gap-8'>
          <HeaderLogo logo={headerLogo} />
          <div className='hidden lg:flex'>
            <CategoryMenu textColor={textColor} />
          </div>
        </div>

        {/* Mobile Menu */}
        <div className='flex items-center lg:hidden gap-4'>
          <CartButton
            textColor={textColor}
            cartNumBGColor={cartNumBGColor}
            cartNumColor={cartNumColor}
          />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant='ghost' size='icon' className={`${textColor}`}>
                <Menu className='h-6 w-6 sm:h-8 sm:w-8' />
              </Button>
            </SheetTrigger>
            <SheetContent side='left' className='w-[280px] sm:w-[350px]'>
              <SheetHeader>
                <VisuallyHidden>
                  <SheetTitle>Hello</SheetTitle>
                </VisuallyHidden>
              </SheetHeader>
              <MobileHeaderLinks />
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Menu */}
        <div className='hidden lg:flex items-center gap-6'>
          <HeaderLinks
            textColor={textColor}
            cartNumBGColor={cartNumBGColor}
            cartNumColor={cartNumColor}
          />
        </div>
      </header>
    </>
  )
}

export default Header
