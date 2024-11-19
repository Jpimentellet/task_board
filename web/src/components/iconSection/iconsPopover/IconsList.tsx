import { useEffect } from 'react'
import { useIconSectionContext } from '../../../contexts/IconSectionContext'

const IconsList = () => {
  const context = useIconSectionContext()

  useEffect(() => {
    context?.getIcons()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="icons-list">

    </div>
  )
}

export { IconsList }