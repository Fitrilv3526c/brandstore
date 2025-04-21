import { useMemo } from 'react'
import data from '@/lib/data'

interface Options {
  category?: string
  sortOption: string
  page: number
  productsPerPage: number
  minPrice: number
  maxPrice: number
  searchQuery?: string
}

export const useProductList = ({
  category,
  sortOption,
  page,
  productsPerPage,
  minPrice,
  maxPrice,
  searchQuery,
}: Options) => {
  // 1. Filter products by category
  const filtered = data.Products.filter((product) => {
    const matchesCategory =
      !category || category === 'all' || product.category === category

    const matchesPrice = product.price >= minPrice && product.price <= maxPrice
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchQuery?.toLowerCase() || '')
    return matchesCategory && matchesPrice && matchesSearch
  })

  // 2. Sort the filtered products
  const sorted = useMemo(() => {
    const sorted = [...filtered]
    if (sortOption === 'priceLowToHigh') {
      sorted.sort((a, b) => a.price - b.price)
    } else if (sortOption === 'priceHighToLow') {
      sorted.sort((a, b) => b.price - a.price)
    } else if (sortOption === 'popularity') {
      sorted.sort(
        (a, b) =>
          b.rating.value * b.rating.count - a.rating.value * a.rating.count
      )
    } else if (sortOption === 'ratingHighToLow') {
      sorted.sort((a, b) => b.rating.value - a.rating.value)
    } else if (sortOption === 'latest') {
      sorted.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )
    }

    return sorted
  }, [filtered, sortOption])

  // 3. Paginate
  const totalPages = Math.ceil(sorted.length / productsPerPage)

  const currentProducts = useMemo(() => {
    return sorted.slice((page - 1) * productsPerPage, page * productsPerPage)
  }, [sorted, page, productsPerPage])

  // 4. Calculate start and end indices
  const start =
    currentProducts.length === 0 ? 0 : (page - 1) * productsPerPage + 1

  const end =
    currentProducts.length === 0 ? 0 : start + currentProducts.length - 1

  return {
    currentProducts,
    totalPages,
    totalProducts: sorted.length,
    start,
    end,
  }
}
