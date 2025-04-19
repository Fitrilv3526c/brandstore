'use client'
import ProductPageContainer from '@/components/product/ProductPage/ProductPageContainer'
import Sidebar from '@/components/product/Sidebar/Sidebar'
import React, { useState } from 'react'

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(500)
  return (
    <div className='p-16 grid grid-cols-[26%_70%] gap-10 items-start'>
      <Sidebar
        setMaxPrice={setMaxPrice}
        setMinPrice={setMinPrice}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <ProductPageContainer
        minPrice={minPrice}
        maxPrice={maxPrice}
        searchQuery={searchQuery}
      />
    </div>
  )
}

export default Products
