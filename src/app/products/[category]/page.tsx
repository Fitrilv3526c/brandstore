'use client'
import ProductCard from '@/components/product/ProductCard'
import MyBreadcrumb from '@/components/product/ProductPage/BreadCrumb'
import Dropdown from '@/components/product/ProductPage/DropDown'
import { Pagination } from '@/components/product/ProductPage/Pagination'
import Sidebar from '@/components/product/Sidebar/Sidebar'
import { useProductList } from '@/hook/useProductList'
import { useParams } from 'next/navigation'
import { useState } from 'react'

const Category = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const params = useParams()
  const selectedCategory = params.category as string
  const [page, setPage] = useState<number>(1)
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(500)
  const [sortOption, setSortOption] = useState('Default sorting')
  const productsPerPage: number = Number(process.env.PRODUCTS_PER_PAGE) || 8
  const { currentProducts, totalPages, start, end, totalProducts } =
    useProductList({
      category: selectedCategory,
      sortOption,
      page,
      productsPerPage,
      minPrice,
      maxPrice,
      searchQuery,
    })

  return (
    <>
      <div className='p-16 grid lg:grid-cols-[26%_70%] gap-10 items-start '>
        <div className='order-2 lg:order-1'>
          <Sidebar
            setMaxPrice={setMaxPrice}
            setMinPrice={setMinPrice}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>

        <div className=' bg-white  h-auto p-20 order-1 lg:order-1'>
          <MyBreadcrumb categoryName={selectedCategory} />
          <h1 className='text-4xl sm:text-5xl md:text-7xl font-semibold mb-16'>
            {selectedCategory}
          </h1>
          {currentProducts.length > 0 && (
            <div className='flex justify-between mb-11 text-[18px]'>
              <span>
                Showing {start}-{end} of {totalProducts}
              </span>
              <Dropdown setSortOption={setSortOption} />
            </div>
          )}
          {currentProducts.length > 0 ? (
            <ProductCard
              products={currentProducts}
              classes='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4'
            />
          ) : (
            <div className='text-center text-gray-500 text-lg mt-10'>
              No products match your filters.
            </div>
          )}

          {totalPages && totalPages > 1 && (
            <Pagination page={page} setPage={setPage} totalPages={totalPages} />
          )}
        </div>
      </div>
    </>
  )
}

export default Category
