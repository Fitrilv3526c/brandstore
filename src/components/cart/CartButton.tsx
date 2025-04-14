import { ShoppingBag } from 'lucide-react'

const CartButton = () => {
  return (
    <div className='flex items-center gap-8'>
      <span>$ 0.00</span>
      <div className='relative'>
        <span className='absolute bottom-4 left-3 rounded-full w-6 h-6 text-sm flex items-center justify-center bg-white text-black'>
          0
        </span>
        <ShoppingBag />
      </div>
    </div>
  )
}

export default CartButton
