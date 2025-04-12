import { PropsWithChildren, useEffect, useRef, useState } from 'react'
import { IconBox } from './iconSection/IconBox'
import { Icons } from '../enums/icons'

const Popover = ({ children }: PropsWithChildren) => {
  const [isVisible, setIsVisible] = useState(false)
  const popoverRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  const toggleVisibility = () => setIsVisible(!isVisible)

  const isClickPopoverOutside = (event: globalThis.MouseEvent) => (
    popoverRef.current &&
    !popoverRef.current?.contains(event.target as Node) &&
    !triggerRef.current?.contains(event.target as Node)
  )

  useEffect(() => {
    const handleClickOutside = (event: globalThis.MouseEvent) => {
      if (isClickPopoverOutside(event)) setIsVisible(false)
    }

    document.addEventListener('mousedown', handleClickOutside as EventListener)
  }, [])

  return (
    <div className="popover-container">
      <button
        ref={ triggerRef }
        onClick={ toggleVisibility }
        className="popover-trigger"
        aria-haspopup="true"
        aria-expanded={ isVisible }
        aria-controls="popover-content"
      >
        <IconBox iconId={ Icons.add } />
      </button>
      {
        isVisible &&
          <div
            id="popover-content"
            ref={ popoverRef }
            className="popover-content"
            role="dialog"
            aria-modal="true"
          >
            { children }
          </div>
      }
    </div>
  )
}

export { Popover }