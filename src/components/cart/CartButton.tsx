'use client'
import { useCartStore } from '@/hook/CartStore'
import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'

interface props {
  textColor: string
  cartNumColor: string
  cartNumBGColor: string
}
const CartButton = ({ textColor, cartNumColor, cartNumBGColor }: props) => {
  const cart = useCartStore((state) => state.cart)

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  return (
    <div className={`flex items-center gap-8 ${textColor} `}>
      <span>${totalPrice.toFixed(2)}</span>
      <div className='relative hover:text-blue-300'>
        <span
          className={`absolute bottom-4 left-3 rounded-full w-6 h-6 text-sm flex items-center justify-center ${cartNumColor} ${cartNumBGColor}`}
        >
          {cart.length}
        </span>
        <Link className='' href='/cart'>
          <ShoppingBag />
        </Link>
      </div>
    </div>
  )
}

export default CartButton
