const CategoryMenu = () => {
  return (
    <ul className='text-white flex items-center gap-4 xl:gap-6 font-medium'>
      {['EVERYTHING', 'WOMEN', 'MEN', 'ACCESSORIES'].map((item) => (
        <li
          key={item}
          className='hover:text-blue-300 cursor-pointer transition-colors'
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

export default CategoryMenu
