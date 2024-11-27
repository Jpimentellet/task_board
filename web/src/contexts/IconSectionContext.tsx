import { PropsWithChildren, useContext, useState } from 'react'
import { createContext } from 'react'
import { IconType } from '../types/iconSectionType'
import { getAvailableIcons, getIconsCategories } from '../external/icons'
import {
  CategoryType, IconSectionContextType
} from '../types/contexts/iconSectionContextType'

const context = createContext<IconSectionContextType>(null)

const IconSectionContext = ({ children }: PropsWithChildren) => {
  const [showIconsPopover,    setShowIconsPopover]  = useState(false)
  const [searchFilterInput,  setSearchFilterInput]  = useState('')
  const [selectedCategoryId, setSelectedCategoryId] = useState('')
  const [categories,               setCategories] = useState<CategoryType[]>([])
  const [icons,                         setIcons] = useState<IconType[]>([])
  const [usedIcons, setUsedIcons] = useState<IconType[]>([
    {
      id: 1,
      url: 'src/assets/logo.svg',
      isInternal: true
    },
    {
      id: 2,
      url: 'src/assets/close_ring_duotone-1.svg',
      isInternal: true
    }
  ])

  const getCategories = () => getIconsCategories()
    .then(data => setCategories(data))
    .catch(error => console.log('error: ', error))

  const getIcons = (category = '') => getAvailableIcons(category)
    .then(data => {
      console.log('DATA ', data)
      setIcons(data)
    })
    .catch(error => console.log('error: ', error))

  return (
    <context.Provider value={{
      usedIcons,
      setUsedIcons,
      showIconsPopover,
      setShowIconsPopover,
      searchFilterInput,
      setSearchFilterInput,
      categories,
      icons,
      selectedCategoryId,
      setSelectedCategoryId,
      getCategories,
      getIcons
    }}>
      { children }
    </context.Provider>
  )
}

const useIconSectionContext = () => useContext(context)

// eslint-disable-next-line react-refresh/only-export-components
export { IconSectionContext, useIconSectionContext }

