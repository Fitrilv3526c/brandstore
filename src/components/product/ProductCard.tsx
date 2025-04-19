import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '../ui/button'
import { BsHandbagFill } from 'react-icons/bs'
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip'
import ProductRating from './ProductRating'

export interface Product {
  id: number
  title: string
  img: string
  category: string
  discount: boolean
  discountPercentage: number
  price: number
  rating: {
    value: number
  }
}

interface Props {
  products: Product[]
  classes: string
}

const ProductCard = ({ products, classes }: Props) => {
  const getDiscountedPrice = (price: number, percentage: number) => {
    return price - (price * percentage) / 100
  }

  if (!products || products.length === 0) return null
  return (
    <div className={classes}>
      {products.map((product) => {
        const finalPrice = product.discount
          ? getDiscountedPrice(product.price, product.discountPercentage)
          : product.price

        return (
          <Link href='/' key={product.id} className='w-full min-w-0'>
            <div className='relative group transition-all aspect-square'>
              <Image
                src={product.img}
                alt={product.title}
                width={300}
                height={300}
                className='object-contain w-full h-full'
                sizes='(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw'
              />

              <div className='absolute top-[23px] w-full flex justify-between px-4'>
                <div>
                  {product.discount && (
                    <Badge className='bg-white text-black rounded-full shadow-lg text-[12px]'>
                      Sale!
                    </Badge>
                  )}
                </div>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button className='bg-gray-100 text-black hover:bg-white rounded-full hidden group-hover:block cursor-pointer'>
                      <BsHandbagFill className='w-5 h-5' />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Add to Cart</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
            <h3 className='mt-3 text-lg font-semibold'>{product.title}</h3>
            <p className='text-gray-500'>{product.category}</p>
            <div className='mt-2 space-x-2 text-base flex flex-col sm:flex-row'>
              {product.discount && (
                <span className=' line-through text-gray-400 '>
                  ${product.price.toFixed(2)}
                </span>
              )}
              <span className=' font-bold'>${finalPrice.toFixed(2)}</span>
            </div>
            <div className='mt-3'>
              <ProductRating value={product.rating.value} readOnly />
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default ProductCard
