import { useBoardContext } from '../../contexts/BoardContext'
import { OptionalNumber } from '../../types/custom'
import { Item } from '../Item'

const List = () => {
  const context = useBoardContext()

  const getStateIconId = (stateId: OptionalNumber) =>
    context?.states.find(s => s?.id === stateId)?.iconId

  const getStateColor = (stateId: OptionalNumber) =>
    context?.states.find(s => s?.id === stateId)?.color

  return (
    <div className='list'>
      {
        context?.tasks.map(t => (
          <Item
            key={ t.id }
            title={ t.title }
            description={ t.description }
            leftIconId={ t.taskIconId }
            rightIconId={ getStateIconId(t.taskStateId) }
            background={ getStateColor(t.taskStateId) }
            onClick={ () => context.openEditForm(t) }
          />
        ))
      }
    </div>
  )
}

export { List }