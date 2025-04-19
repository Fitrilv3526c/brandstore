'use client'
import data from '@/lib/data'
import BestSellers from './BestSellers'
import CategoriesName from './CategoriesName'
import Filter from './Filter'
import Search from './Search'
import { useEffect } from 'react'

interface props {
  setMinPrice: (n: number) => void
  setMaxPrice: (n: number) => void
  setSearchQuery: (query: string) => void
  searchQuery: string
}

const Sidebar = ({
  setMinPrice,
  setMaxPrice,
  setSearchQuery,
  searchQuery,
}: props) => {
  const prices = data.Products.map((p) => p.price)
  const minProductPrice = Math.min(...prices)
  const maxProductPrice = Math.max(...prices)

  useEffect(() => {
    setMinPrice(minProductPrice)
    setMaxPrice(maxProductPrice)
  }, [minProductPrice, maxProductPrice, setMinPrice, setMaxPrice])

  const bestsellers = [...data.Products]
    .sort((a, b) => b.rating.value - a.rating.value)
    .slice(0, 5)

  return (
    <div className='flex flex-col'>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Filter
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
        min={minProductPrice}
        max={maxProductPrice}
      />
      <CategoriesName />
      <BestSellers products={bestsellers} />
    </div>
  )
}
export default Sidebar
