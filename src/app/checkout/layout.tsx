import Footer from '@/components/layout/Footer/Footer'
import Header from '@/components/layout/Header/Header'

export default function CartLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='bg-[#f5f7f9]'>
      <Header
        bgColor='bg-white'
        textColor='text-black'
        headerLogo='/images/logo-black.png'
        cartNumBGColor='bg-black'
        cartNumColor='text-white'
      />
      {children}
      <Footer />
    </div>
  )
}
