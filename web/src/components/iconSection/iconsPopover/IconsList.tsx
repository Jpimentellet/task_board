import { useEffect } from 'react'
import { useIconSectionContext } from '../../../contexts/IconSectionContext'
import { IconBox } from '../IconBox'
import { IconType } from '../../../types/iconSectionType'
import { setItem } from '../../../helpers/localstoraje'

const IconsList = () => {
  const context = useIconSectionContext()
  const usedIcons             = context?.usedIcons || []
  const usedIconsAsUnselected = context?.getUsedIconsAsUnselected() || []
  const selectedCategoryId    = context?.selectedCategoryId || ''

  useEffect(() => {
    const getParams = () => selectedCategoryId ?
    `category=${selectedCategoryId}` : ''

    context?.getIcons(getParams())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context?.selectedCategoryId])

  const addAsSelected = (newSelectedIcon: IconType) => {
    const newUsedIcons = [
      ...usedIconsAsUnselected,
      { ...newSelectedIcon, isSelected: true }
    ]
    context?.setUsedIcons(newUsedIcons)
    setItem('usedIcons', newUsedIcons)
}

  const isAlreadyUsed = (icon: IconType) =>
    usedIcons.some(i => i.id === icon.id)

  const canBeAdded = (icon: IconType) =>
    usedIcons.length <= 22 && !isAlreadyUsed(icon)

  const handleChoosed = (icon: IconType) =>
    canBeAdded(icon) ? addAsSelected(icon) : usedIcons

  return (
    <div className="icons-list">
        {
          context?.icons.map(i => (
              <IconBox
                key={ i.id }
                iconId={ i.id }
                source={ i.url }
                onClick={ () => handleChoosed(i) }
              />
          ))
        }
    </div>
  )
}

export { IconsList }