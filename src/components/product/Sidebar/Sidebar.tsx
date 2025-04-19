import data from '@/lib/data'
import BestSellers from './BestSellers'
import CategoriesName from './CategoriesName'
import Filter from './Filter'
import Search from './Search'

const Sidebar = () => {
  const bestsellers = [...data.Products]
    .sort((a, b) => b.rating.value - a.rating.value)
    .slice(0, 5)
  return (
    <div className='flex flex-col'>
      <Search />
      <Filter />
      <CategoriesName />
      <BestSellers products={bestsellers} />
    </div>
  )
}

export default Sidebar
