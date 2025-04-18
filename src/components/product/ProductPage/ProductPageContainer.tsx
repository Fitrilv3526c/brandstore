'use client'
import data from '@/lib/data'
import ProductCard from '@/components/product/ProductCard'
import MyBreadcrumb from './BreadCrumb'
import Dropdown from './DropDown'
import { Pagination } from './Pagination'
import { useState } from 'react'

const ProductPageContainer = () => {
  const [page, setPage] = useState<number>(1)
  const productsPerPage: number = Number(process.env.PRODUCTS_PER_PAGE) || 6
  const totalPages = Math.ceil(data.Products.length / productsPerPage)

  const currentProducts = data.Products.slice(
    (page - 1) * productsPerPage,
    page * productsPerPage
  )

  const totalProducts = data.Products.length

  const start = (page - 1) * productsPerPage + 1
  const end = Math.min(page * productsPerPage, totalProducts)

  return (
    <>
      <div className=' bg-white  h-auto p-20'>
        <MyBreadcrumb />
        <div className='flex justify-between mb-11 text-[18px]'>
          <span>
            Showing {start}-{end} of {data.Products.length}
          </span>
          <Dropdown />
        </div>
        <ProductCard
          products={currentProducts}
          classes='grid grid-cols-3 xl:grid-cols-4 gap-4'
        />

        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      </div>
    </>
  )
}

export default ProductPageContainer
