import { Icons } from '../../enums/icons'
import { IconBox } from '../IconBox'

const NewTaskButton = () => {
  return (
    <div className="button">
      <IconBox iconId={ Icons.logo } />
      <p>Add new task</p>
    </div>
  )
}

export { NewTaskButton }