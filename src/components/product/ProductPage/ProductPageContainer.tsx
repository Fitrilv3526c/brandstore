'use client'
import ProductCard from '@/components/product/ProductCard'
import MyBreadcrumb from './BreadCrumb'
import Dropdown from './DropDown'
import { Pagination } from './Pagination'
import { useState } from 'react'
import { useProductList } from '@/hook/useProductList'
import { useParams } from 'next/navigation'

// interface Product {
//   id: number
//   title: string
//   img: string
//   category: string
//   discount: boolean
//   discountPercentage: number
//   price: number
// }

const ProductPageContainer = () => {
  const params = useParams()
  const selectedCategory = params.category as string
  const [page, setPage] = useState<number>(1)
  const [sortOption, setSortOption] = useState('Default sorting')
  const productsPerPage: number = Number(process.env.PRODUCTS_PER_PAGE) || 8
  const { currentProducts, totalPages, start, end, totalProducts } =
    useProductList({
      category: selectedCategory,
      sortOption,
      page,
      productsPerPage,
    })

  return (
    <>
      <div className=' bg-white  h-auto p-20'>
        <MyBreadcrumb categoryName='Products' />
        <div className='flex justify-between mb-11 text-[18px]'>
          <span>
            Showing {start}-{end} of {totalProducts}
          </span>
          <Dropdown setSortOption={setSortOption} />
        </div>
        <ProductCard
          products={currentProducts}
          classes='grid grid-cols-3 xl:grid-cols-4 gap-4'
        />
        {totalPages && totalPages > 1 && (
          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        )}
      </div>
    </>
  )
}

export default ProductPageContainer
