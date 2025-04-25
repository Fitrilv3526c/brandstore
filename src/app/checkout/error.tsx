'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function CheckoutError({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  const router = useRouter()

  useEffect(() => {
    console.error('Cart/Checkout error:', error)
  }, [error])

  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-center px-4'>
      <h1 className='text-3xl font-bold mb-2'>Something went wrong</h1>
      <p className='text-gray-600 mb-6'>
        We couldn&apos;t process your cart or checkout. Please try again.
      </p>
      <div className='flex gap-3'>
        <button
          onClick={reset}
          className='bg-black text-white px-4 py-2 rounded hover:bg-gray-800'
        >
          Retry
        </button>
        <button
          onClick={() => router.push('/cart')}
          className='border border-black px-4 py-2 rounded hover:bg-gray-100'
        >
          Back to Cart
        </button>
      </div>
    </div>
  )
}
