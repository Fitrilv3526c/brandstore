'use client'

import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface props {
  totalPages: number
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
}

export function Pagination({ totalPages, page, setPage }: props) {
  return (
    <div className='flex items-center gap-2 mt-10'>
      <Button
        variant='outline'
        size='icon'
        onClick={() => setPage((p) => Math.max(p - 1, 1))}
        disabled={page === 1}
      >
        <ChevronLeft className='h-4 w-4' />
      </Button>

      {[...Array(totalPages)].map((_, i) => {
        const pageNumber = i + 1
        return (
          <Button
            key={pageNumber}
            variant={page === pageNumber ? 'default' : 'outline'}
            onClick={() => setPage(pageNumber)}
          >
            {pageNumber}
          </Button>
        )
      })}

      <Button
        variant='outline'
        size='icon'
        onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
        disabled={page === totalPages}
      >
        <ChevronRight className='h-4 w-4' />
      </Button>
    </div>
  )
}
