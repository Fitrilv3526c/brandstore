import CartButton from '@/components/cart/CartButton'
import { UserRound } from 'lucide-react'
import Link from 'next/link'

const HeaderLinks = () => {
  return (
    <ul className='flex items-center font-semibold lg:font-bold text-white gap-5 xl:gap-8'>
      <Link href='/' className=''>
        ABOUT
      </Link>
      <Link href='/' className=''>
        CONTACT US
      </Link>
      <Link href='/' className=''>
        <CartButton />
      </Link>
      <Link href='/' className=''>
        <UserRound />
      </Link>
    </ul>
  )
}

export default HeaderLinks
