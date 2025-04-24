'use client'
import { usePathname } from 'next/navigation'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@/components/ui/breadcrumb'

interface Props {
  categoryName?: string
  productName?: string
}

const MyBreadcrumb = ({ categoryName, productName }: Props) => {
  const pathname = usePathname()
  const pathParts = pathname.split('/').filter(Boolean)

  const isEverythingPage = pathname === '/product'
  const isEverythingProductPage =
    pathParts.length === 2 && pathParts[0] === 'product'
  const isCategoryPage = pathParts.length === 2 && pathParts[0] === 'products'
  const isCategoryProductPage =
    pathParts.length === 3 && pathParts[0] === 'products'

  return (
    <Breadcrumb className='flex text-gray-500 text-sm mb-5'>
      <BreadcrumbItem>
        <BreadcrumbLink href='/'>Home</BreadcrumbLink>
      </BreadcrumbItem>

      {(isEverythingPage || isEverythingProductPage) && (
        <>
          <span>/</span>
          <BreadcrumbItem>
            <BreadcrumbLink href='/product'>Products</BreadcrumbLink>
          </BreadcrumbItem>
          {isEverythingProductPage && productName && (
            <>
              <span>/</span>
              <BreadcrumbItem>
                <BreadcrumbLink>{productName}</BreadcrumbLink>
              </BreadcrumbItem>
            </>
          )}
        </>
      )}

      {(isCategoryPage || isCategoryProductPage) && (
        <>
          <span>/</span>
          <BreadcrumbItem>
            <BreadcrumbLink href={`/products/${categoryName}`}>
              {categoryName}
            </BreadcrumbLink>
          </BreadcrumbItem>
          {isCategoryProductPage && productName && (
            <>
              <span>/</span>
              <BreadcrumbItem>
                <BreadcrumbLink>{productName}</BreadcrumbLink>
              </BreadcrumbItem>
            </>
          )}
        </>
      )}
    </Breadcrumb>
  )
}

export default MyBreadcrumb
