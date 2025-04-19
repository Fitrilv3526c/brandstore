import ProductPageContainer from '@/components/product/ProductPage/ProductPageContainer'
import Sidebar from '@/components/product/Sidebar/Sidebar'
import React from 'react'

const Products = () => {
  return (
    <div className='p-16 grid grid-cols-[26%_70%] gap-10'>
      <Sidebar />
      <ProductPageContainer />
    </div>
  )
}

export default Products
