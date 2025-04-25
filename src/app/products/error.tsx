'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function ProductsError({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  const router = useRouter()

  useEffect(() => {
    console.error('Products page error:', error)
  }, [error])

  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-center px-4'>
      <h1 className='text-3xl font-bold mb-2'>Unable to load products</h1>
      <p className='text-gray-600 mb-6'>
        Something went wrong while fetching product listings.
      </p>
      <div className='flex gap-3'>
        <button
          onClick={reset}
          className='bg-black text-white px-4 py-2 rounded hover:bg-gray-800'
        >
          Try Again
        </button>
        <button
          onClick={() => router.push('/')}
          className='border border-black px-4 py-2 rounded hover:bg-gray-100'
        >
          Back to Home
        </button>
      </div>
    </div>
  )
}
