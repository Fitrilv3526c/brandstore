'use client'

import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-center'>
      <h1 className='text-4xl font-bold mb-4'>500 - Something went wrong</h1>
      <p className='text-lg text-gray-600 mb-4'>
        Please try refreshing the page.
      </p>
      <button
        className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer'
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  )
}
