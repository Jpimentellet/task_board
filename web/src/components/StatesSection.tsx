import { useEffect } from 'react'
import { useBoardContext } from '../contexts/BoardContext'
import { Icons } from '../enums/icons'
import { TaskState } from '../types/contexts/boardContextType'
import { StatesSectionType } from '../types/statesSectionType'
import { Item } from './Item'

const StatesSection = ({ label }: StatesSectionType) => {
  const context = useBoardContext()
  const states: TaskState[] = [
    {
      id: 1,
      name: 'In progress',
      iconId: Icons.inprogress,
      color: '#E9A23B'
    },
    {
      id: 2,
      name: 'Paused',
      iconId: Icons.paused,
      color: '#F5E8D5'
    },
    {
      id: 3,
      name: 'Canceled',
      iconId: Icons.canceled,
      color: '#DD524C'
    },
    {
      id: 4,
      name: 'Completed',
      iconId: Icons.completed,
      color: '#32D657'
    }
  ]

  useEffect(() => {
    setCurrentTaskState()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context?.taskStateId])

  const setCurrentTaskState = () => {
    const currentState = getCurrentTaskState()
    if (!currentState) return context?.setTaskStateId(null)
    context?.setTaskStateId(currentState.id)
  }

  const getCurrentTaskState = () =>
    states.find(s => s?.id === context?.taskStateId)

  const isSelected = (state: TaskState) => state?.id === context?.taskStateId

  const getIconIdOfSelected = (state: TaskState) =>
    isSelected(state) ? Icons.selected : null

  const chooseState = (state: TaskState) => {
    context?.setTaskStateId(null)
    if (!isSelected(state)) context?.setTaskStateId(state?.id || null)
  }

  return (
    <div className="states-section">
      { label && <label> { label } </label> }
      <div className="states">
        {
          states.map(s => (
            <Item
              key={ s?.id }
              description={ s?.name || '' }
              leftIconId={ s?.iconId }
              rightIconId={ getIconIdOfSelected(s) }
              onClick={ () => chooseState(s) }
              background={ s?.color }
            />
          ))
        }
      </div>
    </div>
  )
}

export { StatesSection }