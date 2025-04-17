import Banner from '@/components/layout/Banner/Banner'
import Carosal from '@/components/layout/carousal/Carosal'
import Deals from '@/components/layout/Deals/Deals'
import Services from '@/components/layout/services/Services'
import ProductContainer from '@/components/product/ProductContainer'

export default function Home() {
  return (
    <>
      <div className='mx-auto w-full px-4 sm:px-6 max-w-7xl'>
        {' '}
        {/* Better container */}
        <Carosal />
        <Deals />
      </div>

      <div className='bg-[#f5f7f9] pb-30'>
        <div className='mx-auto w-full px-4 sm:px-6 max-w-7xl'>
          {' '}
          {/* Consistent container */}
          <ProductContainer />
          <Banner />
          <Services />
        </div>
      </div>
    </>
  )
}
