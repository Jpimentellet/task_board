import { PropsWithChildren, useContext, useState } from 'react'
import { createContext } from 'react'
import { UsedIconsType } from '../types/iconSectionType'
import { getAvailableIcons, getIconsCategories } from '../external/icons'
import {
  CategoryType, IconSectionContextType
} from '../types/contexts/iconSectionContextType'

const context = createContext<IconSectionContextType>(null)

const IconSectionContext = ({ children }: PropsWithChildren) => {
  const [showIconsPopover,   setShowIconsPopover] = useState(false)
  const [searchFilterInput, setSearchFilterInput] = useState('')
  const [categories,               setCategories] = useState<CategoryType[]>([])
  const [icons,                         setIcons] = useState([])
  const [selectedCategories,   setSelectedCategories] = useState<string[]>([])
  const usedIcons: UsedIconsType[] = [
    {
      id: 1,
      url: 'src/assets/logo.svg',
      isInternal: true
    },
    {
      id: 2,
      url: 'src/assets/close_ring_duotone-1.svg',
      isInternal: true
    },
    {
      id: 3,
      url: 'src/assets/logo.svg',
      isSelected: false
    },
    {
      id: 4,
      url: 'src/assets/logo.svg',
      isSelected: false
    },
    {
      id: 5,
      url: 'src/assets/logo.svg',
      isSelected: true
    },
  ]

  const getCategories = () => getIconsCategories()
    .then(data => setCategories(data))
    .catch(error => console.log('error: ', error))

  const getIcons = () => getAvailableIcons()
    .then(data => setIcons(data))
    .catch(error => console.log('error: ', error))

  return (
    <context.Provider value={{
      usedIcons,
      showIconsPopover,
      setShowIconsPopover,
      searchFilterInput,
      setSearchFilterInput,
      categories,
      icons,
      selectedCategories,
      setSelectedCategories,
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

