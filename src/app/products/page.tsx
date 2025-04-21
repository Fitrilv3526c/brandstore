'use client'
import ProductPageContainer from '@/components/product/ProductPage/ProductPageContainer'
import Sidebar from '@/components/product/Sidebar/Sidebar'
import useStateFunc from '@/hook/useStateFunc'

const Products = () => {
  const {
    searchQuery,
    setSearchQuery,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
  } = useStateFunc()
  return (
    <div className='p-7 md:p-16 grid  lg:grid-cols-[26%_70%] gap-10 items-start'>
      <div className='order-2 lg:order-1'>
        <Sidebar
          setMaxPrice={setMaxPrice}
          setMinPrice={setMinPrice}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </div>
      <div className='order-1 lg:order-1'>
        <ProductPageContainer
          minPrice={minPrice}
          maxPrice={maxPrice}
          searchQuery={searchQuery}
        />
      </div>
    </div>
  )
}

export default Products
