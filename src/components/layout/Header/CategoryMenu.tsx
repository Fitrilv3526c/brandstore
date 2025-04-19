'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const categories = [
  {
    title: 'EVERYTHING',
    href: '/products',
  },
  {
    title: 'WOMEN',
    href: '/products/Women',
  },
  {
    title: 'MEN',
    href: '/products/Men',
  },
  {
    title: 'ACCESSORIES',
    href: '/products/Accessories',
  },
]

interface props {
  textColor: string
}

const CategoryMenu = ({ textColor }: props) => {
  const pathname = usePathname()
  return (
    <ul className={`text-white flex items-center gap-4 xl:gap-6 font-medium`}>
      {categories.map((category) => (
        <Link
          href={category.href}
          key={category.title}
          className={`hover:text-blue-300 cursor-pointer transition-colors ${textColor} 
          ${pathname === category.href && 'text-blue-500'}
          `}
        >
          {category.title}
        </Link>
      ))}
    </ul>
  )
}

export default CategoryMenu
