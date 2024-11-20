export type IconType = {
  id:          number,
  url:         string,
  tags?:       string[],
  isInternal?: boolean,
  isSelected?: boolean
}

export type IconSectionType = { label?: string }