import { useIconSectionContext } from '../../contexts/IconSectionContext'
import { IconType } from '../../types/iconType'

const IconBox = ({ iconId, onClick, classes }: IconType) => {
  const context = useIconSectionContext()

  const findSource = () => context?.usedIcons.find(i => i.id === iconId)?.url

  return (
    <figure className={`icon-box ${classes}`} onClick={ onClick }>
      <img src={ findSource() } alt="icon" />
    </figure>
  )
}

export { IconBox }