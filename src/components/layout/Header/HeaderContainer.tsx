import Header from './Header'

const HeaderContainer = () => {
  return (
    // settiong Image as background
    <div
      className='relative min-h-[70vh] md:min-h-[80vh] lg:min-h-screen bg-cover bg-center bg-fixed'
      style={{ backgroundImage: 'url(/images/hero.jpg)' }}
    >
      {/* setting image overlay */}
      <div
        className='absolute inset-0 z-10'
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(0, 132, 214, 0.4) -50%, rgba(0, 0, 0, 0.5) 100%)',
        }}
      ></div>

      <Header />
    </div>
  )
}

export default HeaderContainer
