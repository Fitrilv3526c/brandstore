'use client'
import { useCartStore } from '@/hook/CartStore'
import Link from 'next/link'
import Image from 'next/image'
import { MdDelete } from 'react-icons/md'

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCartStore()

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  return (
    <div className='p-8'>
      <h1 className='text-3xl font-semibold mb-6 text-center'>Your Cart</h1>
      {cart.length === 0 ? (
        <p className='text-center'>
          Your cart is empty.{' '}
          <Link href='/' className='text-blue-600'>
            Continue Shopping
          </Link>
        </p>
      ) : (
        <div className='space-y-4'>
          {cart.map((item) => (
            <div
              key={item.id}
              className='flex justify-between items-center border-b pb-4'
            >
              <div className='flex items-center gap-4'>
                <Image
                  src={item.img}
                  alt={item.title}
                  width={300}
                  height={300}
                  className='w-16 h-16 object-cover'
                />
                <div>
                  <p>{item.title}</p>
                  <p>
                    ${item.price} x {item.quantity} = $
                    {item.price * item.quantity}
                  </p>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <input
                  type='number'
                  min={1}
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, Number(e.target.value))
                  }
                  className='w-16 border p-1 rounded'
                />
                <button
                  onClick={() => removeFromCart(item.id)}
                  className='text-red-500 text-3xl cursor-pointer hover:text-red-600'
                >
                  <MdDelete />
                </button>
              </div>
            </div>
          ))}
          <div className='text-right font-semibold text-xl'>
            Total: ${totalPrice.toFixed(2)}
          </div>
          <button
            onClick={clearCart}
            className='mt-4 bg-red-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-red-600'
          >
            Clear Cart
          </button>
          <button
            className='mt-4 bg-blue-600 ml-5 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-700'
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  )
}

export default CartPage
