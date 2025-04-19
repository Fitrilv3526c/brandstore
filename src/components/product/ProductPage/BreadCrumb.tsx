import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@/components/ui/breadcrumb'

interface props {
  categoryName: string
  productName?: string
}

const MyBreadcrumb = ({ categoryName, productName }: props) => {
  return (
    <Breadcrumb className='flex text-gray-500 text-sm mb-5'>
      <BreadcrumbItem>
        <BreadcrumbLink href='/'>Home</BreadcrumbLink>
      </BreadcrumbItem>
      <span>/</span>
      <BreadcrumbItem>
        <BreadcrumbLink> {categoryName}</BreadcrumbLink>
      </BreadcrumbItem>
      <span className='hidden'>/</span>
      <BreadcrumbItem>
        <BreadcrumbLink> {productName}</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}

export default MyBreadcrumb
