'use client'
import { Button } from '@/components/ui/button'
import { useRef, useState } from 'react'

interface props {
  min: number
  max: number
  setMinPrice: (n: number) => void
  setMaxPrice: (n: number) => void
}

// const MIN = 0
// const MAX = 500

const Filter = ({ setMaxPrice, setMinPrice, min, max }: props) => {
  const [minVal, setMinVal] = useState(min)
  const [maxVal, setMaxVal] = useState(max)
  const range = useRef<HTMLDivElement>(null)
  const getPercent = (value: number) =>
    Math.round(((value - min) / (max - min)) * 100)

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
          min={min}
          max={max}
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
          min={min}
          max={max}
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
        <Button
          className='bg-blue-600 px-7 text-[16px] hover:bg-blue-700 cursor-pointer'
          onClick={() => {
            setMinPrice(minVal)
            setMaxPrice(maxVal)
          }}
        >
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
