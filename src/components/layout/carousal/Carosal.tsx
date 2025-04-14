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
    <div className=' my-20'>
      <Carousel>
        <CarouselPrevious />
        <CarouselContent>
          <CarouselItem className='basis-1/5'>
            <Image
              src='/images/client1.png'
              alt='client-logo-1'
              width={150}
              height={100}
            />
          </CarouselItem>
          <CarouselItem className='basis-1/5'>
            <Image
              src='/images/client2.png'
              alt='client-logo-2'
              width={150}
              height={100}
            />
          </CarouselItem>
          <CarouselItem className='basis-1/5'>
            <Image
              src='/images/client3.png'
              alt='client-logo-3'
              width={150}
              height={100}
            />
          </CarouselItem>
          <CarouselItem className='basis-1/5'>
            <Image
              src='/images/client4.png'
              alt='client-logo-4'
              width={150}
              height={100}
            />
          </CarouselItem>
          <CarouselItem className='basis-1/5'>
            <Image
              src='/images/client5.png'
              alt='client-logo-5'
              width={150}
              height={100}
            />
          </CarouselItem>

          <CarouselItem className='basis-1/5'>
            <Image
              src='/images/client1.png'
              alt='client-logo-1'
              width={150}
              height={100}
            />
          </CarouselItem>
          <CarouselItem className='basis-1/5'>
            <Image
              src='/images/client2.png'
              alt='client-logo-2'
              width={150}
              height={100}
            />
          </CarouselItem>
          <CarouselItem className='basis-1/5'>
            <Image
              src='/images/client3.png'
              alt='client-logo-3'
              width={150}
              height={100}
            />
          </CarouselItem>
          <CarouselItem className='basis-1/5'>
            <Image
              src='/images/client4.png'
              alt='client-logo-4'
              width={150}
              height={100}
            />
          </CarouselItem>
          <CarouselItem className='basis-1/5'>
            <Image
              src='/images/client5.png'
              alt='client-logo-5'
              width={150}
              height={100}
            />
          </CarouselItem>

          <CarouselItem className='basis-1/5'>
            <Image
              src='/images/client1.png'
              alt='client-logo-1'
              width={150}
              height={100}
            />
          </CarouselItem>
          <CarouselItem className='basis-1/5'>
            <Image
              src='/images/client2.png'
              alt='client-logo-2'
              width={150}
              height={100}
            />
          </CarouselItem>
          <CarouselItem className='basis-1/5'>
            <Image
              src='/images/client3.png'
              alt='client-logo-3'
              width={150}
              height={100}
            />
          </CarouselItem>
          <CarouselItem className='basis-1/5'>
            <Image
              src='/images/client4.png'
              alt='client-logo-4'
              width={150}
              height={100}
            />
          </CarouselItem>
          <CarouselItem className='basis-1/5'>
            <Image
              src='/images/client5.png'
              alt='client-logo-5'
              width={150}
              height={100}
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default Carosal
