import { useBoardContext } from '../../contexts/BoardContext'
import { useIconSectionContext } from '../../contexts/IconSectionContext'
import { Icons } from '../../enums/icons'
import { IconType } from '../../types/iconSectionType'
import { IconBox } from './IconBox'
import { IconsPopover } from './iconsPopover/IconsPopover'

const UsedIconsList = () => {
  const context = useIconSectionContext()
  const boardContext = useBoardContext()
  const usedIcons = context?.usedIcons || []
  const usedIconsAsUnselected = context?.getUsedIconsAsUnselected() || []

  const deleteUsedIcon = (icon: IconType) => {
    const currentIcons = usedIcons.filter(i => i.id !== icon.id)
    context?.setUsedIcons(currentIcons)
  }

  const getSelectedClass = (icon: IconType) =>
    icon.isSelected ? 'selected' : ''

  const chooseIcon = (icon: IconType) => {
    const newUsedIcons = usedIconsAsUnselected.map(usedIcon => ({
      ...usedIcon,
      isSelected: usedIcon.id === icon.id
    }))
    context?.setUsedIcons(newUsedIcons)
    boardContext?.setTaskIconId(icon.id)
  }

  return (
    <div className="used-icons-list">
      {
        usedIcons.map((icon, index) => (
          <div className="used-icons-list-item" key={ index }>
            <IconBox
              iconId={ Icons.close }
              classes='delete-button'
              onClick={ () => deleteUsedIcon(icon) }
            />
            <IconBox
              iconId={ icon.id }
              onClick={ () => chooseIcon(icon) }
              classes={ getSelectedClass(icon) }
            />
          </div>
        ))
      }
      <IconsPopover/>
    </div>
  )
}

export { UsedIconsList }