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
    context?.selectedCategories.includes(category.id)

  const add = (category: CategoryType) =>
    context?.setSelectedCategories([...context.selectedCategories, category.id])

  const remove = (category: CategoryType) => {
    const selected = context?.selectedCategories.filter(c => c !== category.id)
    context?.setSelectedCategories(selected || [])
  }

  const addToFilter = (category: CategoryType) =>
    isSelected(category) ? remove(category) : add(category)

  return (
    <div className="categories-filter">
      {
        context?.categories.map(c => (
          <label
            key={ c.id }
            className={`item ${ isSelected(c) && 'selected' } `}
            onClick={ () => addToFilter(c) }
          >
            { c.name }
          </label>
        ))
      }
    </div>
  )
}

export { CategoriesFilter }