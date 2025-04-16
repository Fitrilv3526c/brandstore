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

interface Product {
  id: number
  title: string
  img: string
  category: string
  discount: boolean
  discountPercentage: number
  price: number
}

interface Props {
  products: Product[]
}

const ProductCard = ({ products }: Props) => {
  const getDiscountedPrice = (price: number, percentage: number) => {
    return price - (price * percentage) / 100
  }

  return (
    <div className='grid grid-cols-5 gap-6'>
      {products.map((product) => {
        const finalPrice = product.discount
          ? getDiscountedPrice(product.price, product.discountPercentage)
          : product.price

        return (
          <Link href='/' key={product.id} className=' w-[250px] h-[375px]'>
            <div className='relative group  transition-all'>
              <Image
                src={product.img}
                alt={product.title}
                width={250}
                height={250}
                className='object-contain'
              />
              <div className='absolute top-[23px] w-full flex justify-between px-4'>
                <div>
                  {product.discount && (
                    <Badge className='bg-white text-black rounded-full shadow-lg text-[12px]'>
                      Sale!
                    </Badge>
                  )}
                </div>

                {/* <Button className=' bg-gray-100 text-black hover:bg-white rounded-full hidden group-hover:block'>
                  <BsHandbagFill />
                </Button> */}
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
            <div className='mt-2 space-x-2 text-base'>
              {product.discount && (
                <span className='line-through text-gray-400'>
                  ${product.price.toFixed(2)}
                </span>
              )}
              <span className=' font-bold'>${finalPrice.toFixed(2)}</span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default ProductCard
