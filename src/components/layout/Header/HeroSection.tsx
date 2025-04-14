import { Button } from '@/components/ui/button'

const HeroSection = () => {
  return (
    <div className='z-30 text-white '>
      <h1 className='text-6xl tracking-wider font-bold'>
        Raining Offers For
        <span className='block mt-6'>Hot Summer!</span>
      </h1>
      <h2 className='mt-6 text-2xl font-bold'>25% Off On All Products</h2>
      <div className='mt-6 flex gap-5 '>
        <Button className='btn cursor-pointer px-8 py-7 text-[16px] font-medium'>
          Shop Now
        </Button>
        <Button className='btn2 cursor-pointer px-8 py-7 text-[16px] font-medium'>
          Find More
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
