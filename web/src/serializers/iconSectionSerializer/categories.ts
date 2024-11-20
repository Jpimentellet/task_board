import { IconsCategoriesType } from '../../types/requests/icons'

const formatCategories = (categories: IconsCategoriesType[]) =>
  categories.map(c => ({ id: c.identifier, name: c.name }))

export { formatCategories }