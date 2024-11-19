type Category = { identifier: string, name: string }

const formatCategories = (categories: Category[]) => categories.map(c => ({
  id:   c.identifier,
  name: c.name
}))

export { formatCategories }