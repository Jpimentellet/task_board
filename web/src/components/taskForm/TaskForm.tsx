import { useBoardContext } from '../../contexts/BoardContext'
import { IconSection } from '../iconSection/IconSection'
import { Modal } from '../Modal'
import { StatesSection } from '../StatesSection'
import { Actions } from './Actions'
import { DeleteModal } from './DeleteModal/DeleteModal'
import { DescriptionInput } from './DescriptionInput'
import { NameInput } from './NameInput'

const TaskForm = () => {
  const context = useBoardContext()

  const getTitle = () => context?.taskId ? 'Task details' : 'New task'

  return (
    <Modal
      title={ getTitle() }
      show={ context?.showTaskForm }
      onCancel={ () => context?.closeTaskForm() }
      classes='task-form'
    >
      <NameInput/>
      <DescriptionInput/>
      <IconSection label='Icon'/>
      <StatesSection label='State'/>
      <Actions/>
      <DeleteModal/>
    </Modal>
  )
}

export { TaskForm }