import ProductCard from './ProductCard'
import data from '@/lib/data'

const ProductContainer = () => {
  return (
    <div className=' py-30'>
      <h1 className='text-center font-bold text-4xl'>Featured Products</h1>
      <span className='block mx-auto h-0.5 w-20 mt-10 mb-20 bg-blue-600 '></span>
      <div className='w-[90%] mx-auto'>
        <ProductCard products={data.Products} />
      </div>
    </div>
  )
}

export default ProductContainer
