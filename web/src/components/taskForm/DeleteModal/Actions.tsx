import { useBoardContext } from '../../../contexts/BoardContext'
import { Button } from '../../Button'

const Actions = () => {
  const context = useBoardContext()

  return (
    <div className="actions">
      <Button
        text='Cancel'
        onClick={ () => context?.setShowDeleteTask(false) }
      />
      <Button
        text='Confirm'
      />
    </div>
  )
}

export { Actions }