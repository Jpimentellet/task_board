import { useBoardContext } from '../../contexts/BoardContext'
import { Modal } from '../Modal'

const HeaderForm = () => {
  const context = useBoardContext()

  return (
    <Modal
      title='Board details'
      show={ context?.showForm }
      onCancel={ () => context?.setShowForm(false) }
    >
      Ete e u hede
    </Modal>
  )
}

export { HeaderForm }