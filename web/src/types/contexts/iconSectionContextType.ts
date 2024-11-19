import { Dispatch, SetStateAction } from 'react'
import { UsedIconsType } from '../iconSectionType'

export type CategoryType = { id: string, name: string }
export type OptionalCategoryType = CategoryType | null

export type IconSectionContextType = {
  usedIcons:             UsedIconsType[],
  showIconsPopover:      boolean,
  searchFilterInput:     string,
  categories:            CategoryType[],
  icons:                 [],
  selectedCategories:    string[],
  setShowIconsPopover:   Dispatch<SetStateAction<boolean>>,
  setSearchFilterInput:  Dispatch<SetStateAction<string>>,
  setSelectedCategories: Dispatch<SetStateAction<string[]>>
  getCategories:         () => void,
  getIcons:              () => void
} | null