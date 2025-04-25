// 'use client'
// import { useParams, usePathname } from 'next/navigation'
// import 'react-inner-image-zoom/lib/styles.min.css'
// import data from '@/lib/data'
// import MyBreadcrumb from '../product/ProductPage/BreadCrumb'
// import { useState } from 'react'
// import dynamic from 'next/dynamic'
// import RelatedProducts from './RelatedProducts'
// import { useCartStore } from '@/hook/CartStore'
// import { toast } from 'sonner'

// const ProductDetails = () => {
//   const params = useParams()
//   const pathname = usePathname()
//   const [quantity, setQuantity] = useState(1)
//   const pathParts = pathname.split('/').filter(Boolean)
//   const matchedProduct = data.Products.find(
//     (x) => x.id === Number(params.product)
//   )

//   const InnerImageZoom = dynamic(() => import('react-inner-image-zoom'), {
//     ssr: false,
//   })

//   let breadcrumbCategory = ''
//   let breadcrumbProduct = ''

//   if (pathname === '/product') {
//     breadcrumbCategory = 'Products'
//   } else if (pathParts.length === 2 && pathParts[0] === 'products') {
//     breadcrumbCategory = pathParts[1]
//   } else if (pathParts.length === 2 && pathParts[0] === 'product') {
//     breadcrumbCategory = 'Products'
//     const matchedProduct = data.Products.find(
//       (p) => p.id.toString() === pathParts[1]
//     )
//     breadcrumbProduct = matchedProduct?.title ?? `Product #${pathParts[1]}`
//   } else if (pathParts.length === 3 && pathParts[0] === 'products') {
//     breadcrumbCategory = pathParts[1]
//     const matchedProduct = data.Products.find(
//       (p) => p.id.toString() === pathParts[2]
//     )
//     breadcrumbProduct = matchedProduct?.title ?? `Product #${pathParts[2]}`
//   }

//   if (!matchedProduct) {
//     return <div>Product not found</div>
//   }
//   const getDiscountedPrice = (price: number, percentage: number) => {
//     return price - (price * percentage) / 100
//   }

//   const finalPrice = matchedProduct.discount
//     ? getDiscountedPrice(
//         matchedProduct.price,
//         matchedProduct.discountPercentage
//       )
//     : matchedProduct.price

//   const handleAddToCart = () => {
//     const addToCart = useCartStore.getState().addToCart
//     addToCart({
//       id: matchedProduct.id,
//       title: matchedProduct.title,
//       img: matchedProduct.img,
//       price: matchedProduct.price,
//       quantity: quantity,
//     })
//     toast.success(`${matchedProduct.title} added to cart!`, {
//       duration: 3000,
//       style: {
//         backgroundColor: '#28a745',
//         color: 'white',
//       },
//     })
//   }

//   return (
//     <div>
//       <div className='flex justify-center gap-10 py-16 px-2'>
//         <div className='w-full max-w-[600px] h-auto '>
//           <InnerImageZoom
//             src={matchedProduct?.img || '/images/men6.jpg'}
//             zoomSrc={matchedProduct?.img || '/images/men6.jpg'}
//             zoomType='hover'
//             zoomPreload={true}
//           />
//         </div>
//         <div className='w-full max-w-[590px] h-auto '>
//           <MyBreadcrumb
//             categoryName={breadcrumbCategory}
//             productName={breadcrumbProduct}
//           />

//           <span className='font-semibold'>{matchedProduct.category}</span>
//           <h2 className='text-2xl font-semibold my-5'>
//             {matchedProduct.title}
//           </h2>
//           <div className='mb-5 space-x-2 text-base flex flex-col sm:flex-row items-center'>
//             {matchedProduct.discount && (
//               <span className=' line-through text-gray-400'>
//                 ${matchedProduct.price.toFixed(2)}
//               </span>
//             )}
//             <span className=' font-bold text-xl'>${finalPrice.toFixed(2)}</span>
//             <span className='text-sm'>+ Free Shipping</span>
//           </div>
//           <p className='tracking-wide mb-5'>{matchedProduct.description}</p>
//           <div className='border-b pb-5'>
//             {matchedProduct.stock > 0 ? (
//               <div>
//                 <span className='text-green-500 mb-2 block'>
//                   In Stock: {matchedProduct.stock} left
//                 </span>
//                 <label className='block mb-1'>Quantity</label>
//                 <input
//                   type='number'
//                   min='1'
//                   max={matchedProduct.stock}
//                   value={quantity}
//                   onChange={(e) => setQuantity(Number(e.target.value))}
//                   className='border rounded p-2 w-24'
//                 />
//                 <button
//                   onClick={handleAddToCart}
//                   className='bg-blue-600 ml-5 text-white px-7 py-2.5 cursor-pointer mt-3 hover:bg-blue-700'
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             ) : (
//               <span className='text-red-500'>Out of Stock</span>
//             )}
//           </div>
//           <div className='mt-5'>
//             Category :{' '}
//             <span className='font-semibold '>{matchedProduct.category}</span>
//           </div>
//         </div>
//       </div>

//       <div className='flex justify-center'>
//         <RelatedProducts
//           currentProduct={matchedProduct}
//           allProducts={data.Products}
//         />
//       </div>
//     </div>
//   )
// }

// export default ProductDetails

'use client'
import { useParams, usePathname } from 'next/navigation'
import 'react-inner-image-zoom/lib/styles.min.css'
import data from '@/lib/data'
import MyBreadcrumb from '../product/ProductPage/BreadCrumb'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import RelatedProducts from './RelatedProducts'
import { useCartStore } from '@/hook/CartStore'
import { toast } from 'sonner'

const ProductDetails = () => {
  const params = useParams()
  const pathname = usePathname()
  const [quantity, setQuantity] = useState(1)
  const pathParts = pathname.split('/').filter(Boolean)
  const matchedProduct = data.Products.find(
    (x) => x.id === Number(params.product)
  )

  const InnerImageZoom = dynamic(() => import('react-inner-image-zoom'), {
    ssr: false,
  })

  let breadcrumbCategory = ''
  let breadcrumbProduct = ''

  if (pathname === '/product') {
    breadcrumbCategory = 'Products'
  } else if (pathParts.length === 2 && pathParts[0] === 'products') {
    breadcrumbCategory = pathParts[1]
  } else if (pathParts.length === 2 && pathParts[0] === 'product') {
    breadcrumbCategory = 'Products'
    const matchedProduct = data.Products.find(
      (p) => p.id.toString() === pathParts[1]
    )
    breadcrumbProduct = matchedProduct?.title ?? `Product #${pathParts[1]}`
  } else if (pathParts.length === 3 && pathParts[0] === 'products') {
    breadcrumbCategory = pathParts[1]
    const matchedProduct = data.Products.find(
      (p) => p.id.toString() === pathParts[2]
    )
    breadcrumbProduct = matchedProduct?.title ?? `Product #${pathParts[2]}`
  }

  if (!matchedProduct) {
    return <div>Product not found</div>
  }

  const getDiscountedPrice = (price: number, percentage: number) => {
    return price - (price * percentage) / 100
  }

  const finalPrice = matchedProduct.discount
    ? getDiscountedPrice(
        matchedProduct.price,
        matchedProduct.discountPercentage
      )
    : matchedProduct.price

  const handleAddToCart = () => {
    const addToCart = useCartStore.getState().addToCart
    addToCart({
      id: matchedProduct.id,
      title: matchedProduct.title,
      img: matchedProduct.img,
      price: matchedProduct.price,
      quantity: quantity,
    })
    toast.success(`${matchedProduct.title} added to cart!`, {
      duration: 3000,
      style: {
        backgroundColor: '#28a745',
        color: 'white',
      },
    })
  }

  return (
    <div>
      <div className='flex flex-col md:flex-row justify-center items-center md:items-start gap-10 py-16 px-3'>
        <div className='w-full max-w-[600px] h-auto mb-6 lg:mb-0'>
          <InnerImageZoom
            src={matchedProduct?.img || '/images/men6.jpg'}
            zoomSrc={matchedProduct?.img || '/images/men6.jpg'}
            zoomType='hover'
            zoomPreload={true}
          />
        </div>
        <div className='w-full max-w-[590px] h-auto'>
          <MyBreadcrumb
            categoryName={breadcrumbCategory}
            productName={breadcrumbProduct}
          />

          <span className='font-semibold text-base sm:text-lg'>
            {matchedProduct.category}
          </span>
          <h2 className='text-2xl font-semibold my-5'>
            {matchedProduct.title}
          </h2>
          <div className='mb-5 space-x-2 text-base flex flex-row items-center'>
            {matchedProduct.discount && (
              <span className='line-through text-gray-400'>
                ${matchedProduct.price.toFixed(2)}
              </span>
            )}
            <span className='font-bold text-sm sm:text-2xl'>
              ${finalPrice.toFixed(2)}
            </span>
            <span className='text-sm'>+ Free Shipping</span>
          </div>
          <p className='tracking-wide mb-5 text-sm sm:text-base'>
            {matchedProduct.description}
          </p>
          <div className='border-b pb-5'>
            {matchedProduct.stock > 0 ? (
              <div>
                <span className='text-green-500 mb-2 block'>
                  In Stock: {matchedProduct.stock} left
                </span>
                <label className='block mb-1 text-sm sm:text-base'>
                  Quantity
                </label>
                <input
                  type='number'
                  min='1'
                  max={matchedProduct.stock}
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className='border rounded p-2 w-24 sm:w-28 lg:w-32'
                />
                <button
                  onClick={handleAddToCart}
                  className='bg-blue-600 ml-5 text-white px-7 py-2.5 cursor-pointer mt-3 hover:bg-blue-700'
                >
                  Add to Cart
                </button>
              </div>
            ) : (
              <span className='text-red-500'>Out of Stock</span>
            )}
          </div>
          <div className='mt-5 text-sm sm:text-base'>
            Category :{' '}
            <span className='font-semibold'>{matchedProduct.category}</span>
          </div>
        </div>
      </div>

      <div className='flex justify-center p-3'>
        <RelatedProducts
          currentProduct={matchedProduct}
          allProducts={data.Products}
        />
      </div>
    </div>
  )
}

export default ProductDetails
