import { Button } from '@/components/ui/button'

const HeroSection = () => {
  return (
    <div className='text-white space-y-4 md:space-y-6 lg:ml-[9rem]'>
      <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
        Raining Offers For
        <br className='hidden md:inline' />
        <span className='md:ml-2'>Hot Summer!</span>
      </h1>
      <h2 className='text-lg sm:text-xl md:text-2xl font-semibold'>
        25% Off On All Products
      </h2>
      <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5'>
        <Button className='btn px-6 py-4 sm:px-8 sm:py-5 text-sm sm:text-base font-medium'>
          Shop Now
        </Button>
        <Button
          variant='outline'
          className=' btn2 px-6 py-4 sm:px-8 sm:py-5 text-sm sm:text-base font-medium'
        >
          Find More
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
