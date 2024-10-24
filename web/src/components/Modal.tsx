import { PropsWithChildren, useEffect, useRef } from 'react'
import { Props } from '../types/props'

const Modal = ({ show, onCancel, children }: PropsWithChildren<Props>) => {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (show) return ref.current?.showModal()
      ref.current?.close()
  }, [show])

  return (
    <>
      { show &&
        <dialog className="modal" ref={ ref } onCancel={ onCancel }>
          <div className="modal-header">

          </div>
          <div className="modal-content">
            { children }
          </div>
          <div className="modal-actions">

          </div>
        </dialog>
      }
    </>
  )
}

export { Modal }