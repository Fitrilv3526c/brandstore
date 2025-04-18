'use client'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const Dropdown = () => {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState('Default sorting')
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      {/* <DropdownMenuTrigger className='flex justify-between items-center gap-12 px-4 py-2 bg-white text-black hover:border hover:border-dotted'>
        Default sorting
        <IoIosArrowDown />
      </DropdownMenuTrigger> */}
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
          onClick={() => setSelected('Sort by popularity')}
          className='data-[highlighted]:bg-blue-400'
        >
          Sort by popularity
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setSelected('Sort by avarage rating')}
          className='data-[highlighted]:bg-blue-400'
        >
          Sort by avarage rating
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setSelected('Sort by latest')}
          className='data-[highlighted]:bg-blue-400'
        >
          Sort by latest
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setSelected('Sort by price: low to high')}
          className='data-[highlighted]:bg-blue-400'
        >
          Sort by price: low to high
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setSelected('Sort by price: high to low')}
          className='data-[highlighted]:bg-blue-400'
        >
          Sort by price: high to low
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Dropdown
