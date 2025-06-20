import { useBoardContext } from '../../contexts/BoardContext'
import { Icons } from '../../enums/icons'
import { IconBox } from '../iconSection/IconBox'

const NewTaskButton = () => {
  const context = useBoardContext()

  const openTaskForm = () => context?.setShowTaskForm(true)

  return (
    <div className="new-task-button" onClick={ openTaskForm }>
      <IconBox iconId={ Icons.add } />
      <p>Add new task</p>
    </div>
  )
}

export { NewTaskButton }