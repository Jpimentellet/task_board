import { useIconSectionContext } from '../../contexts/IconSectionContext'
import { UsedIconsType } from '../../types/iconSectionType'
import { IconBox } from './IconBox'
import { IconsPopover } from './iconsPopover/IconsPopover'

const UsedIconsList = () => {
  const context = useIconSectionContext()

  const userUsedIcons = () => context?.usedIcons.filter(i => !i.isInternal)

  const getSelectedClass = (icon: UsedIconsType) =>
    icon.isSelected ? 'selected' : ''

  return (
    <div className="used-icons-list">
      {
        userUsedIcons()?.map(icon => (
          <IconBox
            key={ icon.id }
            iconId={ icon.id }
            onClick={ () => {} }
            classes={ getSelectedClass(icon) }
          />
        ))
      }
      <IconsPopover/>
    </div>
  )
}

export { UsedIconsList }