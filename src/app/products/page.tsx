import ProductPageContainer from '@/components/product/ProductPage/ProductPageContainer'
import Sidebar from '@/components/product/Sidebar'
import React from 'react'

const Products = () => {
  return (
    <div className='p-16 grid grid-cols-[30%_70%] '>
      <Sidebar />
      <ProductPageContainer />
    </div>
  )
}

export default Products
