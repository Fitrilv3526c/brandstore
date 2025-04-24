'use client'
import ProductCard from '@/components/product/ProductCard'
import { Product } from '@/components/product/ProductCard'

interface RelatedProductsProps {
  currentProduct: Product
  allProducts: Product[]
}

const RelatedProducts = ({
  currentProduct,
  allProducts,
}: RelatedProductsProps) => {
  const relatedProducts = allProducts
    .filter(
      (p) =>
        p.category === currentProduct.category && p.id !== currentProduct.id
    )
    .slice(0, 4)

  if (relatedProducts.length === 0) return null

  return (
    <div className='my-20'>
      <h2 className='text-3xl font-bold mb-6'>Related Products</h2>
      <ProductCard
        products={relatedProducts}
        currentCategory={currentProduct.category.toLowerCase()}
        classes='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4'
      />
    </div>
  )
}

export default RelatedProducts
