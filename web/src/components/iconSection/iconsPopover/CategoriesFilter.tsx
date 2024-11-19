import { useEffect } from 'react'
import { useIconSectionContext } from '../../../contexts/IconSectionContext'

const CategoriesFilter = () => {
  const context = useIconSectionContext()

  useEffect(() => {
    context?.getCategories()
  }, [])

  return (
    <div className="categories-filter">

    </div>
  )
}

export { CategoriesFilter }