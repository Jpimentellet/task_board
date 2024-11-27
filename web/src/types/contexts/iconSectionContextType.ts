import { Dispatch, SetStateAction } from 'react'
import { IconType } from '../iconSectionType'

export type CategoryType = { id: string, name: string }
export type OptionalCategoryType = CategoryType | null

export type IconSectionContextType = {
  usedIcons:             IconType[],
  showIconsPopover:      boolean,
  searchFilterInput:     string,
  categories:            CategoryType[],
  icons:                 IconType[],
  selectedCategoryId:      string,
  setUsedIcons:          Dispatch<SetStateAction<IconType[]>>
  setShowIconsPopover:   Dispatch<SetStateAction<boolean>>,
  setSearchFilterInput:  Dispatch<SetStateAction<string>>,
  setSelectedCategoryId: Dispatch<SetStateAction<string>>
  getCategories:         () => void,
  getIcons:              (category: string) => void
} | null