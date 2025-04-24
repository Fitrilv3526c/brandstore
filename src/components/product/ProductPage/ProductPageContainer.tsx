'use client'
import ProductCard from '@/components/product/ProductCard'
import MyBreadcrumb from './BreadCrumb'
import Dropdown from './DropDown'
import { Pagination } from './Pagination'
import { useState } from 'react'
import { useProductList } from '@/hook/useProductList'
import { useParams, usePathname } from 'next/navigation'

interface props {
  minPrice: number
  maxPrice: number
  searchQuery: string
  categoryName?: string
}

const ProductPageContainer = ({
  minPrice,
  maxPrice,
  searchQuery,
  categoryName,
}: props) => {
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
      minPrice,
      maxPrice,
      searchQuery,
    })

  const pathname = usePathname()
  const pathParts = pathname.split('/').filter(Boolean)

  let breadcrumbCategory = ''
  let breadcrumbProduct = ''

  if (pathname === '/product') {
    breadcrumbCategory = 'Products'
  } else if (pathParts.length === 2 && pathParts[0] === 'products') {
    breadcrumbCategory = pathParts[1]
  } else if (pathParts.length === 2 && pathParts[0] === 'product') {
    breadcrumbCategory = 'Products'
    const matchedProduct = currentProducts.find(
      (p) => p.id.toString() === pathParts[1]
    )
    breadcrumbProduct = matchedProduct?.title ?? `Product #${pathParts[1]}`
  } else if (pathParts.length === 3 && pathParts[0] === 'products') {
    breadcrumbCategory = pathParts[1]
    const matchedProduct = currentProducts.find(
      (p) => p.id.toString() === pathParts[2]
    )
    breadcrumbProduct = matchedProduct?.title ?? `Product #${pathParts[2]}`
  }
  

  return (
    <>
      <div className=' bg-white  h-auto p-14 sm:p-20'>
        <MyBreadcrumb
          categoryName={breadcrumbCategory}
          productName={breadcrumbProduct}
        />
        <h1 className='text-4xl sm:text-5xl md:text-7xl font-semibold mb-16'>
          {categoryName}
        </h1>
        {currentProducts.length > 0 && (
          <div className='flex justify-between items-center flex-wrap mb-11 text-[18px]'>
            <span className='mb-4 sm:mb-0'>
              Showing {start}-{end} of {totalProducts}
            </span>

            <Dropdown setSortOption={setSortOption} />
          </div>
        )}
        {currentProducts.length > 0 ? (
          <ProductCard
            currentCategory={categoryName || 'everything'}
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
    </>
  )
}

export default ProductPageContainer
