import Image from 'next/image'
import Link from 'next/link'

const HeaderLogo = () => {
  return (
    <Link href='/' passHref className='focus:outline-none'>
      <Image
        src='/images/logo.png'
        alt='Brandstore Logo'
        width={120}
        height={40}
        className='h-auto w-24 sm:w-28 md:w-32 lg:w-36 cursor-pointer hover:opacity-90 transition-opacity'
        priority
      />
    </Link>
  )
}

export default HeaderLogo
