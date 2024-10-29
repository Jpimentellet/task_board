import { PropsWithChildren, useEffect, useRef } from 'react'
import { Props } from '../types/props'
import { IconBox } from './IconBox'
import { Icons } from '../enums/icons'

const Modal = ({ show, onCancel, title, children }: PropsWithChildren<Props>) => {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (show) return ref.current?.showModal()
      ref.current?.close()
  }, [show])

  return (
    <>
      { show &&
        <dialog className="modal" ref={ ref } onCancel={ onCancel }>
          <div className="header">
            <h2>{ title }</h2>
            <IconBox iconId={ Icons.close } onClick={ onCancel }/>
          </div>
          <div className="content">
            { children }
          </div>
        </dialog>
      }
    </>
  )
}

export { Modal }