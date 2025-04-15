import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'

const Carosal = () => {
  return (
    <div className='my-10 sm:my-15 md:my-20 mx-5'>
      <Carousel>
        <CarouselPrevious />
        <CarouselContent>
          <CarouselItem className='basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/5 flex items-center justify-center'>
            <Image
              src='/images/client1.png'
              alt='client-logo-1'
              width={150}
              height={150}
            />
          </CarouselItem>
          <CarouselItem className='basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/5 flex items-center justify-center'>
            <Image
              src='/images/client2.png'
              alt='client-logo-2'
              width={150}
              height={150}
            />
          </CarouselItem>
          <CarouselItem className='basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/5 flex items-center justify-center'>
            <Image
              src='/images/client3.png'
              alt='client-logo-3'
              width={150}
              height={150}
            />
          </CarouselItem>
          <CarouselItem className='basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/5 flex items-center justify-center'>
            <Image
              src='/images/client4.png'
              alt='client-logo-4'
              width={150}
              height={150}
            />
          </CarouselItem>
          <CarouselItem className='basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/5 flex items-center justify-center'>
            <Image
              src='/images/client5.png'
              alt='client-logo-5'
              width={150}
              height={150}
            />
          </CarouselItem>

          <CarouselItem className='basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/5 flex items-center justify-center'>
            <Image
              src='/images/client1.png'
              alt='client-logo-1'
              width={150}
              height={150}
            />
          </CarouselItem>
          <CarouselItem className='basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/5 flex items-center justify-center'>
            <Image
              src='/images/client2.png'
              alt='client-logo-2'
              width={150}
              height={150}
            />
          </CarouselItem>
          <CarouselItem className='basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/5 flex items-center justify-center'>
            <Image
              src='/images/client3.png'
              alt='client-logo-3'
              width={150}
              height={150}
            />
          </CarouselItem>
          <CarouselItem className='basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/5 flex items-center justify-center'>
            <Image
              src='/images/client4.png'
              alt='client-logo-4'
              width={150}
              height={150}
            />
          </CarouselItem>
          <CarouselItem className='basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/5 flex items-center justify-center'>
            <Image
              src='/images/client5.png'
              alt='client-logo-5'
              width={150}
              height={150}
            />
          </CarouselItem>

          <CarouselItem className='basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/5 flex items-center justify-center'>
            <Image
              src='/images/client1.png'
              alt='client-logo-1'
              width={150}
              height={150}
            />
          </CarouselItem>
          <CarouselItem className='basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/5 flex items-center justify-center'>
            <Image
              src='/images/client2.png'
              alt='client-logo-2'
              width={150}
              height={150}
            />
          </CarouselItem>
          <CarouselItem className='basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/5 flex items-center justify-center'>
            <Image
              src='/images/client3.png'
              alt='client-logo-3'
              width={150}
              height={150}
            />
          </CarouselItem>
          <CarouselItem className='basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/5 flex items-center justify-center'>
            <Image
              src='/images/client4.png'
              alt='client-logo-4'
              width={150}
              height={150}
            />
          </CarouselItem>
          <CarouselItem className='basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/5 flex items-center justify-center'>
            <Image
              src='/images/client5.png'
              alt='client-logo-5'
              width={150}
              height={150}
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default Carosal
