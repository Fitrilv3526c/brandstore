import ProductCard from './ProductCard'
import data from '@/lib/data'

const ProductContainer = () => {
  return (
    <div className=' py-30'>
      <h1 className='text-center font-bold text-4xl'>Featured Products</h1>
      <span className='block mx-auto h-0.5 w-20 mt-10 mb-20 bg-blue-600 '></span>
      <ProductCard
        products={data.Products}
        classes='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6'
      />
    </div>
  )
}

export default ProductContainer
