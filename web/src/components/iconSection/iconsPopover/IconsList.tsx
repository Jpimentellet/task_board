import { useEffect } from 'react'
import { useIconSectionContext } from '../../../contexts/IconSectionContext'
import { IconBox } from '../IconBox'
import { IconType } from '../../../types/iconSectionType'

const IconsList = () => {
  const context = useIconSectionContext()
  const usedIcons          = context?.usedIcons || []
  const selectedCategoryId = context?.selectedCategoryId || ''

  useEffect(() => {
    const getParams = () => selectedCategoryId ?
    `category=${selectedCategoryId}` : ''

    context?.getIcons(getParams())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context?.selectedCategoryId])

  const setAsUnselected = (icon: IconType) => ({
    ...icon,
    isSelected: false
  })

  const getAllUsedIcons = (icon: IconType) => [
    ...usedIcons.map(setAsUnselected),
    { ...icon, isSelected: true }
  ]

  const isAlreadyUsed = (icon: IconType) =>
    usedIcons.some(i => i.id === icon.id)

  const getExternalUsedIconsCount = () =>
    usedIcons.filter(i => !i.isInternal).length

  const canBeAdded = (icon: IconType) =>
    getExternalUsedIconsCount() <= 22 && !isAlreadyUsed(icon)

  const chooseIcon = (icon: IconType) => {
    const icons = canBeAdded(icon) ? getAllUsedIcons(icon) : usedIcons
    context?.setUsedIcons(icons)
  }

  return (
    <div className="icons-list">
        {
          context?.icons.map(i => (
            <IconBox
              key={ i.id }
              iconId={ i.id }
              source={ i.url }
              onClick={ () => chooseIcon(i) }
            />
          ))
        }
    </div>
  )
}

export { IconsList }