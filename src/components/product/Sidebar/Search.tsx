'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { FiChevronRight } from 'react-icons/fi'

interface props {
  searchQuery: string
  setSearchQuery: (query: string) => void
}

const Search = ({ searchQuery, setSearchQuery }: props) => {
  const [input, setInput] = useState(searchQuery)

  const handleSearch = () => {
    setSearchQuery(input)
  }
  return (
    <div className='w-full flex justify-between gap-3 mb-12'>
      <Input
        type='text'
        placeholder='Search Products...'
        className='bg- border bg-white border-gray-300 text-black px-3 py-6 !text-[15px] shadow-none outline-none ring-0'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button
        className='bg-blue-600 py-6 px-2 hover:bg-blue-700 cursor-pointer'
        onClick={handleSearch}
      >
        <FiChevronRight className='!w-6 !h-6' />
      </Button>
    </div>
  )
}

export default Search
