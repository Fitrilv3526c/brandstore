import Carosal from '@/components/layout/carousal/Carosal'
import Deals from '@/components/layout/Deals/Deals'

export default function Home() {
  return (
    <div className=' '>
      <div className=' mx-auto w-[90%]'>
        <Carosal />
        <Deals />
      </div>
    </div>
  )
}
