import Link from 'next/link'

const categories = [
  {
    title: 'Accessories',
    href: '/products/Accessories',
  },
  {
    title: 'Men',
    href: '/products/Men',
  },
  {
    title: 'Women',
    href: '/products/Women',
  },
]

const CategoriesName = () => {
  return (
    <div className='mb-12'>
      <h2 className='text-2xl text-gray-700 font-semibold mb-5'>Categories</h2>
      {categories.map((category) => {
        return (
          <ul className='flex flex-col' key={category.title}>
            <li className='flex justify-between items-center text-lg mb-4'>
              <Link href={category.href} className='hover:text-blue-500'>
                {category.title}
              </Link>
              <span>(0)</span>
            </li>
          </ul>
        )
      })}
    </div>
  )
}

export default CategoriesName
