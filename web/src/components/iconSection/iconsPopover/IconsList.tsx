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

  const unselectIcons = () => {
    const unselected = usedIcons.map(setAsUnselected)
    console.log('unselecting ', unselected)
    context?.setUsedIcons(unselected)
  }

  const getAllUsedIcons = (icon: IconType) => [
    ...usedIcons,
    { ...icon, isSelected: true }
  ]

  const chooseIcon = (icon: IconType) => {
    unselectIcons()
    console.log('1 ', usedIcons)
    console.log('2 ', getAllUsedIcons(icon))
    context?.setUsedIcons(getAllUsedIcons(icon))
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