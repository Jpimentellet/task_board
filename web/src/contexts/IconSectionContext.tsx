import { PropsWithChildren, useContext, useState } from 'react'
import { createContext } from 'react'
import { IconSectionContextType } from '../types/contexts/iconSectionContextType'
import { UsedIconsType } from '../types/iconSectionType'

const context = createContext<IconSectionContextType>(null)

const IconSectionContext = ({ children }: PropsWithChildren) => {
  const [showIconsPopover, setShowIconsPopover]   = useState(false)
  const [searchFilterInput, setSearchFilterInput] = useState('')
  const [categories,               setCategories] = useState([])
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
      id: 1,
      url: 'src/assets/close_ring_duotone-1.svg',
      isSelected: false
    },
    {
      id: 1,
      url: 'src/assets/close_ring_duotone-1.svg',
      isSelected: false
    },
    {
      id: 1,
      url: 'src/assets/close_ring_duotone-1.svg',
      isSelected: false
    },
    {
      id: 1,
      url: 'src/assets/close_ring_duotone-1.svg',
      isSelected: true
    },
    {
      id: 1,
      url: 'src/assets/close_ring_duotone-1.svg',
      isSelected: false
    },
    {
      id: 1,
      url: 'src/assets/close_ring_duotone-1.svg',
      isSelected: false
    },
    {
      id: 1,
      url: 'src/assets/close_ring_duotone-1.svg',
      isSelected: false
    },
    {
      id: 1,
      url: 'src/assets/close_ring_duotone-1.svg',
      isSelected: false
    },
    {
      id: 1,
      url: 'src/assets/close_ring_duotone-1.svg',
      isSelected: false
    },
    {
      id: 1,
      url: 'src/assets/close_ring_duotone-1.svg',
      isSelected: false
    },
    {
      id: 1,
      url: 'src/assets/close_ring_duotone-1.svg',
      isSelected: false
    },
    {
      id: 1,
      url: 'src/assets/close_ring_duotone-1.svg',
      isSelected: false
    },
    {
      id: 1,
      url: 'src/assets/close_ring_duotone-1.svg',
      isSelected: false
    },
    {
      id: 1,
      url: 'src/assets/close_ring_duotone-1.svg',
      isSelected: false
    },
    {
      id: 1,
      url: 'src/assets/close_ring_duotone-1.svg',
      isSelected: false
    },
    {
      id: 1,
      url: 'src/assets/close_ring_duotone-1.svg',
      isSelected: false
    },
    {
      id: 1,
      url: 'src/assets/close_ring_duotone-1.svg',
      isSelected: false
    },
    {
      id: 1,
      url: 'src/assets/close_ring_duotone-1.svg',
      isSelected: false
    },
    {
      id: 1,
      url: 'src/assets/close_ring_duotone-1.svg',
      isSelected: false
    },
    {
      id: 1,
      url: 'src/assets/close_ring_duotone-1.svg',
      isSelected: false
    },
    {
      id: 1,
      url: 'src/assets/close_ring_duotone-1.svg',
      isSelected: false
    },
    {
      id: 1,
      url: 'src/assets/close_ring_duotone-1.svg',
      isSelected: false
    },
    {
      id: 1,
      url: 'src/assets/close_ring_duotone-1.svg',
      isSelected: false
    }
  ]

  return (
    <context.Provider value={{
      usedIcons,
      showIconsPopover,
      setShowIconsPopover,
      searchFilterInput,
      setSearchFilterInput,
      categories
    }}>
      { children }
    </context.Provider>
  )
}

const useIconSectionContext = () => useContext(context)

// eslint-disable-next-line react-refresh/only-export-components
export { IconSectionContext, useIconSectionContext }

