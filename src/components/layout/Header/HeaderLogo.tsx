import Image from 'next/image'

const HeaderLogo = () => {
  return (
    <>
    {/* <Link href='/'> */}
    <Image
          src='/images/logo.png'
          alt='logo'
          width={140}
          height={140}
          className='ml-3 cursor-pointer'
        />
        {/* </Link> */}
    </>
  )
}

export default HeaderLogo