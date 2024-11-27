import { useEffect } from 'react'
import { useIconSectionContext } from '../../../contexts/IconSectionContext'
import { CategoryType } from '../../../types/contexts/iconSectionContextType'

const CategoriesFilter = () => {
  const context = useIconSectionContext()

  useEffect(() => {
    context?.getCategories()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const isSelected = (category: CategoryType) =>
    category.id === context?.selectedCategoryId

  const removeCategoryId = () => context?.setSelectedCategoryId('')

  const setFilter = (category: CategoryType) => isSelected(category) ?
    removeCategoryId() : context?.setSelectedCategoryId(category.id)

  return (
    <div className="categories-filter">
      {
        context?.categories.map(c => (
          <label
            key={ c.id }
            className={`item ${ isSelected(c) && 'selected' } `}
            onClick={ () => setFilter(c) }
          >
            { c.name }
          </label>
        ))
      }
    </div>
  )
}

export { CategoriesFilter }