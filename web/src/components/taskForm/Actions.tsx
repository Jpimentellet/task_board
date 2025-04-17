import { useBoardContext } from '../../contexts/BoardContext'
import { Icons } from '../../enums/icons'
import { Button } from '../Button'

const Actions = () => {
  const context = useBoardContext()

  const isNewTask = () => !context?.taskId

  return (
    <div className="actions">
      {
        !isNewTask() &&
          <Button
            text='Delete'
            onClick={ () => {} }
            iconId={ Icons.close }
          />
      }
      <Button
        text='Send'
        onClick={ context?.save }
        iconId={ Icons.selected }
      />
    </div>
  )
}

export { Actions }