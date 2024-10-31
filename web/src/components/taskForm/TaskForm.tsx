import { useBoardContext } from '../../contexts/BoardContext'
import { Modal } from '../Modal'
import { NameInput } from './NameInput'

const TaskForm = () => {
  const context = useBoardContext()

  return (
    <Modal
      title='Task details'
      show={ context?.showTaskForm }
      onCancel={ () => context?.setShowTaskForm(false) }
    >
      <NameInput/>
    </Modal>
  )
}

export { TaskForm }