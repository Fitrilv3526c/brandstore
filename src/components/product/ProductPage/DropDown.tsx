'use client'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
// import data from '@/lib/data'
import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

interface props {
  setSortOption: (option: string) => void
}

const Dropdown = ({ setSortOption }: props) => {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState('Default')

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger
        className={`flex justify-between items-center  bg-white text-gray-600 gap-3 px-3 py-2 transition
          ${open ? 'border border-dotted border-black' : 'border-none'}
           focus:outline-none focus:ring-0`}
      >
        {selected}
        <IoIosArrowDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-48 p-0 rounded'>
        <DropdownMenuItem
          onClick={() => {
            setSelected('Default sorting')
            setSortOption('Default')
          }}
          className='data-[highlighted]:bg-blue-400'
        >
          Default Sorting
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            setSelected('Sort by popularity')
            setSortOption('popularity')
          }}
          className='data-[highlighted]:bg-blue-400'
        >
          Sort by popularity
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            setSelected('Sort by avarage rating')
            setSortOption('ratingHighToLow')
          }}
          className='data-[highlighted]:bg-blue-400'
        >
          Sort by avarage rating
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            setSelected('Sort by latest')
            setSortOption('latest')
          }}
          className='data-[highlighted]:bg-blue-400'
        >
          Sort by latest
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            setSelected('Sort by price: low to high')
            setSortOption('priceLowToHigh')
          }}
          className='data-[highlighted]:bg-blue-400'
        >
          Sort by price: low to high
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            setSelected('Sort by price: high to low')
            setSortOption('priceHighToLow')
          }}
          className='data-[highlighted]:bg-blue-400'
        >
          Sort by price: high to low
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Dropdown
