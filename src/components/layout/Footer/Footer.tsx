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
      <div className='border-t flex h-[375px] justify-between items-center px-[140px]'>
        <div>
          <Image
            src='/images/logo-black.png'
            alt='logo-black'
            width={150}
            height={150}
          />

          <p>The best look anytime, anywhere.</p>
        </div>
        <div>
          <h2 className='text-2xl font-semibold mb-5'>For Her</h2>
          <ul className='flex flex-col gap-1'>
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
        <div>
          <h2 className='text-2xl font-semibold mb-5'>For Him</h2>
          <ul className='flex flex-col gap-1'>
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
      <div className='bg-white border-t h-[120px] flex items-center justify-between px-[140px]'>
        <p>Copyright © 2025 Brandstore. Powered by Brandstore.</p>
        <ul className='flex items-center gap-8'>
          <Link
            href='https://www.facebook.com'
            target='_blank'
            className='text-[21px] text-gray-700'
          >
            <FaFacebookF />
          </Link>
          <Link
            href='https://www.youtube.com'
            target='_blank'
            className='text-[21px] text-gray-700'
          >
            <FaYoutube />
          </Link>
          <Link
            href='https://www.twitter.com'
            target='_blank'
            className='text-[21px] text-gray-700'
          >
            <FaTwitter />
          </Link>
          <Link
            href='https://www.instagram.com'
            target='_blank'
            className='text-[21px] text-gray-700'
          >
            <FaInstagram />
          </Link>
          <Link
            href='https://www.google.com'
            target='_blank'
            className='text-[21px] text-gray-700'
          >
            <FaGoogle />
          </Link>
        </ul>
      </div>
    </>
  )
}

export default Footer
