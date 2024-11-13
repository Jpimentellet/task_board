import { useBoardContext } from '../../contexts/BoardContext'
import { IconSection } from '../iconSection/IconSection'
import { Modal } from '../Modal'
import { DescriptionInput } from './DescriptionInput'
import { NameInput } from './NameInput'

const TaskForm = () => {
  const context = useBoardContext()

  const getTitle = () => context?.taskId ? 'Task details' : 'New task'

  return (
    <Modal
      title={ getTitle() }
      show={ context?.showTaskForm }
      onCancel={ () => context?.setShowTaskForm(false) }
    >
      <NameInput/>
      <DescriptionInput/>
      <IconSection label='Icon'/>
    </Modal>
  )
}

export { TaskForm }