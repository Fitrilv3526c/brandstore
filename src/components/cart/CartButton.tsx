import { ShoppingBag } from 'lucide-react'

interface props {
  textColor: string
  cartNumColor: string
  cartNumBGColor: string
}
const CartButton = ({ textColor, cartNumColor, cartNumBGColor }: props) => {
  return (
    <div className={`flex items-center gap-8 ${textColor} `}>
      <span>$ 0.00</span>
      <div className='relative hover:text-blue-300'>
        <span
          className={`absolute bottom-4 left-3 rounded-full w-6 h-6 text-sm flex items-center justify-center ${cartNumColor} ${cartNumBGColor}`}
        >
          0
        </span>
        <ShoppingBag />
      </div>
    </div>
  )
}

export default CartButton
