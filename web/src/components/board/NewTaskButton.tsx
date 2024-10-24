import { Icons } from '../../enums/icons'
import { IconBox } from '../IconBox'

const NewTaskButton = () => {
  return (
    <div className="button">
      <IconBox source={ Icons.add } />
      <p>Add new task</p>
    </div>
  )
}

export { NewTaskButton }