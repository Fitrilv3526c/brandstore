// components/Rating.tsx
'use client'

import { Star } from 'lucide-react'
import { useState } from 'react'
import clsx from 'clsx'

type RatingProps = {
  value: number // Current rating, e.g. 3.5
  onChange?: (value: number) => void // Optional: make interactive
  max?: number // Default is 5
  readOnly?: boolean // True for static display
}

const ProductRating = ({
  value,
  onChange,
  max = 5,
  readOnly = false,
}: RatingProps) => {
  const [hoverValue, setHoverValue] = useState<number | null>(null)

  const handleClick = (i: number) => {
    if (!readOnly && onChange) onChange(i)
  }

  return (
    <div className='flex items-center space-x-1'>
      {Array.from({ length: max }, (_, i) => {
        const starIndex = i + 1
        const filled = (hoverValue ?? value) >= starIndex

        return (
          <Star
            key={i}
            size={18}
            className={clsx(
              'cursor-pointer transition-colors',
              filled ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300',
              readOnly && 'cursor-default'
            )}
            onMouseEnter={() => !readOnly && setHoverValue(starIndex)}
            onMouseLeave={() => !readOnly && setHoverValue(null)}
            onClick={() => handleClick(starIndex)}
          />
        )
      })}
    </div>
  )
}

export default ProductRating
