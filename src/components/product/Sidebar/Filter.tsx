'use client'
import { Button } from '@/components/ui/button'
import { useRef, useState } from 'react'

const MIN = 0
const MAX = 500

const Filter = () => {
  const [minVal, setMinVal] = useState(50)
  const [maxVal, setMaxVal] = useState(300)
  const range = useRef<HTMLDivElement>(null)

  // Update slider background
  const getPercent = (value: number) => {
    return Math.round(((value - MIN) / (MAX - MIN)) * 100)
  }

  const minPercent = getPercent(minVal)
  const maxPercent = getPercent(maxVal)

  return (
    <div className='w-full max-w-md py-6 space-y-4 mb-12'>
      <h2 className='text-lg font-semibold'>Filter by Price</h2>

      {/* Price Labels */}
      <div className='flex justify-between text-sm text-muted-foreground'>
        <span>${minVal}</span>
        <span>${maxVal}</span>
      </div>

      {/* Slider Container */}
      <div className='relative h-6'>
        {/* Slider Track */}
        <div className='absolute top-1/2 -translate-y-1/2 w-full h-1 bg-gray-300 rounded' />

        {/* Range Highlight */}
        <div
          ref={range}
          className='absolute top-1/2 -translate-y-1/2 h-1 bg-black rounded'
          style={{
            left: `${minPercent}%`,
            width: `${maxPercent - minPercent}%`,
          }}
        />

        {/* Min Thumb */}
        <input
          type='range'
          min={MIN}
          max={MAX}
          value={minVal}
          onChange={(e) => {
            const val = Math.min(Number(e.target.value), maxVal - 10)
            setMinVal(val)
          }}
          className='absolute w-full pointer-events-none appearance-none z-20 h-6 bg-transparent
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4
            [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black
            [&::-webkit-slider-thumb]:cursor-pointer
            [&::-webkit-slider-thumb]:pointer-events-auto'
        />

        {/* Max Thumb */}
        <input
          type='range'
          min={MIN}
          max={MAX}
          value={maxVal}
          onChange={(e) => {
            const val = Math.max(Number(e.target.value), minVal + 10)
            setMaxVal(val)
          }}
          className='absolute w-full pointer-events-none appearance-none z-20 h-6 bg-transparent
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4
            [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black
            [&::-webkit-slider-thumb]:cursor-pointer
            [&::-webkit-slider-thumb]:pointer-events-auto'
        />
      </div>

      <div className='flex justify-between items-center'>
        <Button className='bg-blue-600 px-7 text-[16px] hover:bg-blue-700 cursor-pointer'>
          Filter
        </Button>
        <p className='text-sm text-gray-500'>
          Price : <strong>${minVal}</strong> - <strong>${maxVal}</strong>
        </p>
      </div>
    </div>
  )
}

export default Filter
