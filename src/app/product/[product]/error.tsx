'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function ProductDetailError({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  const router = useRouter()

  useEffect(() => {
    console.error('Product detail error:', error)
  }, [error])

  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-center px-4'>
      <h1 className='text-3xl font-bold mb-2'>Failed to load product</h1>
      <p className='text-gray-600 mb-6'>
        There was a problem loading this product. It may have been removed.
      </p>
      <div className='flex gap-3'>
        <button
          onClick={reset}
          className='bg-black text-white px-4 py-2 rounded hover:bg-gray-800'
        >
          Try Again
        </button>
        <button
          onClick={() => router.push('/product')}
          className='border border-black px-4 py-2 rounded hover:bg-gray-100'
        >
          Back to Products
        </button>
      </div>
    </div>
  )
}
