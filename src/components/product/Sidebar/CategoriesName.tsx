'use client'
import data from '@/lib/data'
import Link from 'next/link'

const categories = Array.from(
  new Set(data.Products.map((p) => p.category))
).map((category) => ({
  title: category,
  href: `/products/${category}`,
  count: data.Products.filter((p) => p.category === category).length,
}))

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
              <span>({category.count})</span>
            </li>
          </ul>
        )
      })}
    </div>
  )
}

export default CategoriesName
