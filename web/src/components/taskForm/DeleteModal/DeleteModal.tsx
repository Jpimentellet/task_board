import { useBoardContext } from '../../../contexts/BoardContext'
import { Modal } from '../../Modal'
import { Actions } from './Actions'
import { Content } from './Content'

const DeleteModal = () => {
  const context = useBoardContext()

  return (
    <Modal
      classes='delete-button'
      title='Delete task'
      show={ context?.showDeleteTask }
      onCancel={ () => context?.setShowDeleteTask(false) }
    >
      <Content/>
      <Actions/>
    </Modal>
  )
}

export { DeleteModal }