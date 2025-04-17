import CartButton from '@/components/cart/CartButton'
import { UserRound } from 'lucide-react'
import Link from 'next/link'

const HeaderLinks = () => {
  return (
    <ul className='flex items-center font-medium text-white gap-4 xl:gap-6'>
      <Link href='/' className='hover:text-blue-300 transition-colors'>
        ABOUT
      </Link>
      <Link href='/' className='hover:text-blue-300 transition-colors'>
        CONTACT US
      </Link>
      <CartButton />
      <Link href='/' className='hover:text-blue-300 transition-colors'>
        <UserRound className='w-5 h-5' />
      </Link>
    </ul>
  )
}

export default HeaderLinks
