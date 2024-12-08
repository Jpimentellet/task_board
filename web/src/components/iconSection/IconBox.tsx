import { useIconSectionContext } from '../../contexts/IconSectionContext'
import { IconBoxType } from '../../types/iconBoxType'
import { IconType } from '../../types/iconSectionType'

const IconBox = ({ iconId, source = '', onClick, classes }: IconBoxType) => {
  const context       = useIconSectionContext()
  const usedIcons     = context?.usedIcons || []
  const internalIcons = context?.internalIcons || []

  const findFrom = (icons: IconType[]) => icons.find(i => i.id === iconId)?.url

  const getSource = () => findFrom(internalIcons) || findFrom(usedIcons)

  return (
    <figure className={`icon-box ${classes}`} onClick={ onClick }>
      <img src={ source || getSource() } alt="icon" />
    </figure>
  )
}

export { IconBox }