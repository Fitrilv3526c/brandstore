import CartButton from '@/components/cart/CartButton'
import { UserRound } from 'lucide-react'

const HeaderLinks = () => {
  return (
    <ul className='flex items-center gap-8 font-bold text-white'>
      <li>ABOUT</li>
      <li>CONTACT US</li>
      <li>
        <CartButton />
      </li>
      <li>
        <UserRound />
      </li>
    </ul>
  )
}

export default HeaderLinks
