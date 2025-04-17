import Footer from '@/components/layout/Footer/Footer'
import HeaderContainer from '@/components/layout/Header/HeaderContainer'

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='flex flex-col min-h-screen'>
      <HeaderContainer />
      <main className='flex-1 w-full min-w-0 mx-auto'>{children}</main>
      <Footer />
    </div>
  )
}
