import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@/components/ui/breadcrumb'

const MyBreadcrumb = () => {
  return (
    <Breadcrumb className='flex text-gray-500 text-sm mb-5'>
      <BreadcrumbItem>
        <BreadcrumbLink href='/'>Home </BreadcrumbLink>
      </BreadcrumbItem>
      /
      <BreadcrumbItem>
        <BreadcrumbLink href='/store'> Store</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}

export default MyBreadcrumb
