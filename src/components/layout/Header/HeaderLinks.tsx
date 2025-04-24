'use client'
import CartButton from '@/components/cart/CartButton'
import { UserRound } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface props {
  textColor: string
  cartNumColor: string
  cartNumBGColor: string
}

const HeaderLinks = ({ textColor, cartNumBGColor, cartNumColor }: props) => {
  const pathname = usePathname()
  return (
    <ul className={`flex items-center font-medium ${textColor} gap-4 xl:gap-6`}>
      <Link
        href='/about'
        className={`hover:text-blue-300 transition-colors ${
          pathname === '/about' && 'text-blue-500'
        }`}
      >
        ABOUT
      </Link>
      <Link href='/contact' className='hover:text-blue-300 transition-colors'>
        CONTACT US
      </Link>
      <CartButton
        textColor={textColor}
        cartNumBGColor={cartNumBGColor}
        cartNumColor={cartNumColor}
      />
      <Link href='/' className='hover:text-blue-300 transition-colors'>
        <UserRound className='w-5 h-5' />
      </Link>
    </ul>
  )
}

export default HeaderLinks
