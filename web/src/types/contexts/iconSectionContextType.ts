import { Dispatch, SetStateAction } from 'react'
import { UsedIconsType } from '../iconSectionType'

export type categoryType = { id: string, name: string }

export type IconSectionContextType = {
  usedIcons:            UsedIconsType[],
  showIconsPopover:     boolean,
  searchFilterInput:    string,
  categories:           categoryType[],
  setShowIconsPopover:  Dispatch<SetStateAction<boolean>>,
  setSearchFilterInput: Dispatch<SetStateAction<string>>,
  getCategories:        () => void
} | null