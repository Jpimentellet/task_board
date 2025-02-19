import { PropsWithChildren, useContext, useState } from 'react'
import { createContext } from 'react'
import { IconType } from '../types/iconSectionType'
import { getAvailableIcons, getIconsCategories } from '../external/icons'
import {
  CategoryType, IconSectionContextType
} from '../types/contexts/iconSectionContextType'
import { getItem } from '../helpers/localstoraje'

const context = createContext<IconSectionContextType>(null)

const IconSectionContext = ({ children }: PropsWithChildren) => {
  const [showIconsPopover,    setShowIconsPopover]  = useState(false)
  const [searchFilterInput,  setSearchFilterInput]  = useState('')
  const [selectedCategoryId, setSelectedCategoryId] = useState('')
  const [categories,               setCategories] = useState<CategoryType[]>([])
  const [icons,                         setIcons] = useState<IconType[]>([])
  const [
    usedIcons,
    setUsedIcons
  ] = useState<IconType[]>(getItem('usedIcons') || [])
  const internalIcons: IconType[] = [
    {
      id: 1,
      url: 'src/assets/logo.svg'
    },
    {
      id: 2,
      url: 'src/assets/close_ring_duotone-1.svg'
    },
    {
      id: 3,
      url: 'src/assets/inprogress.svg'
    },
    {
      id: 4,
      url: 'src/assets/paused.svg'
    },
    {
      id: 5,
      url: 'src/assets/canceled.svg'
    },
    {
      id: 6,
      url: 'src/assets/completed.svg'
    },
    {
      id: 7,
      url: 'src/assets/selected.svg'
    },
    {
      id: 8,
      url: 'src/assets/delete.svg'
    },
    {
      id: 9,
      url: 'src/assets/send.svg'
    },
  ]

  const getUsedIconsAsUnselected = () => usedIcons.map((icon: IconType) => ({
    ...icon,
    isSelected: false
  }))

  const getCategories = () => getIconsCategories()
    .then(data => setCategories(data))
    .catch(error => console.log('error: ', error))

  const getIcons = (category = '') => getAvailableIcons(category)
    .then(data => setIcons(data))
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
      getUsedIconsAsUnselected,
      getCategories,
      getIcons,
      internalIcons
    }}>
      { children }
    </context.Provider>
  )
}

const useIconSectionContext = () => useContext(context)

// eslint-disable-next-line react-refresh/only-export-components
export { IconSectionContext, useIconSectionContext }

