'use client'
import Image from 'next/image'
import { Product } from '../ProductCard'
import Link from 'next/link'

interface props {
  products: Product[]
}
const BestSellers = ({ products }: props) => {
  return (
    <div>
      <h2 className='text-2xl font-semibold mb-10'>Best Sellers</h2>
      {products.map((product) => (
        <Link href='/' key={product.id} className='flex mb-4 '>
          <div className='relative w-full aspect-[1/1] max-w-[90px]'>
            <Image
              src={product.img}
              alt={product.title}
              fill
              className='object-contain'
              sizes='(max-width: 768px) 50vw, 100px'
            />
          </div>
          <div className='flex flex-col justify-between ml-7'>
            <h3 className='text-lg font-semibold text-gray-700'>
              {product.title}
            </h3>
            <p className='text-[16px] text-gray-700'>${product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default BestSellers
