import { Button } from '@/components/ui/button'

const HeroSection = () => {
  return (
    <div className='z-30 text-white '>
      <h1 className='text-4xl text-testRed md:text-5xl  lg:text-6xl tracking-wider  font-bold sm:text-center md:text-left'>
        Raining Offers For
        <span className='md:block mt-6'> Hot Summer!</span>
      </h1>
      <h2 className='mt-6 text-xl md:text-2xl font-bold'>
        25% Off On All Products
      </h2>
      <div className='mt-6 flex gap-5 '>
        <Button className='btn cursor-pointer text-[16px] font-medium px-5 py-6 md:px-8 md:py-7'>
          Shop Now
        </Button>
        <Button className='btn2 cursor-pointer text-[16px] font-medium px-5 py-6 md:px-8 md:py-7'>
          Find More
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
