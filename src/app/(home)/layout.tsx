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
      <main className='flex-1 container mx-auto px-4 py-6'>{children}</main>
      <Footer />
    </div>
  )
}
