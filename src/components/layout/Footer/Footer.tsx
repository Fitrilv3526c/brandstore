import Image from 'next/image'
import Link from 'next/link'
import {
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaGoogle,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      {/* main-footer */}
      <div className='border-t flex flex-col sm:flex-row h-full sm:h-[375px] justify-center sm:justify-between items-center sm:px-2 md:px-[140px]'>
        <div className='flex items-center justify-center flex-col gap-10 my-8'>
          <Image
            src='/images/logo-black.png'
            alt='logo-black'
            width={150}
            height={150}
          />

          <p className='font-semibold text-xl text-center'>
            The best look anytime, anywhere.
          </p>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <h2 className='text-3xl sm:text-2xl font-bold sm:font-semibold mb-5'>
            For Her
          </h2>
          <ul className='flex flex-col items-center justify-center gap-1'>
            <Link href='/' className='hover:text-blue-500'>
              Women Jeans
            </Link>
            <Link href='/' className='hover:text-blue-500'>
              Tops and Shirts
            </Link>
            <Link href='/' className='hover:text-blue-500'>
              Women Jackets
            </Link>
            <Link href='/' className='hover:text-blue-500'>
              Heels and Flats
            </Link>
            <Link href='/' className='hover:text-blue-500'>
              Women Accessories
            </Link>
          </ul>
        </div>

        <div className='flex flex-col items-center justify-center my-8'>
          <h2 className='text-3xl sm:text-2xl font-bold sm:font-semibold mb-5'>
            For Him
          </h2>
          <ul className='flex flex-col gap-1 items-center justify-center'>
            <Link href='/' className='hover:text-blue-500'>
              Men Jeans
            </Link>
            <Link href='/' className='hover:text-blue-500'>
              Men Shirts
            </Link>
            <Link href='/' className='hover:text-blue-500'>
              Men Sjoes
            </Link>
            <Link href='/' className='hover:text-blue-500'>
              Men Accessories
            </Link>
            <Link href='/' className='hover:text-blue-500'>
              Men Jackets
            </Link>
          </ul>
        </div>
      </div>

      {/* footer 2 */}
      <div className='bg-white border-t h-full sm:h-[120px] flex flex-col sm:flex-row items-center justify-between sm:px-[140px] py-8 gap-5'>
        <p className='text-center'>
          Copyright © 2025 Brandstore. Powered by Brandstore.
        </p>
        <ul className='flex items-center gap-8'>
          <Link
            href='https://www.facebook.com'
            target='_blank'
            className='text-[21px] text-gray-700 hover:text-blue-500'
          >
            <FaFacebookF />
          </Link>
          <Link
            href='https://www.youtube.com'
            target='_blank'
            className='text-[21px] text-gray-700 hover:text-blue-500'
          >
            <FaYoutube />
          </Link>
          <Link
            href='https://www.twitter.com'
            target='_blank'
            className='text-[21px] text-gray-700 hover:text-blue-500'
          >
            <FaTwitter />
          </Link>
          <Link
            href='https://www.instagram.com'
            target='_blank'
            className='text-[21px] text-gray-700 hover:text-blue-500'
          >
            <FaInstagram />
          </Link>
          <Link
            href='https://www.google.com'
            target='_blank'
            className='text-[21px] text-gray-700 hover:text-blue-500'
          >
            <FaGoogle />
          </Link>
        </ul>
      </div>
    </>
  )
}

export default Footer
