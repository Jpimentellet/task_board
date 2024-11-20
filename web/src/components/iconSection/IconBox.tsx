import { useIconSectionContext } from '../../contexts/IconSectionContext'
import { IconBoxType } from '../../types/iconBoxType'

const IconBox = ({ iconId, onClick, classes }: IconBoxType) => {
  const context = useIconSectionContext()

  const findSource = () => context?.usedIcons.find(i => i.id === iconId)?.url

  return (
    <figure className={`icon-box ${classes}`} onClick={ onClick }>
      <img src={ findSource() } alt="icon" />
    </figure>
  )
}

export { IconBox }