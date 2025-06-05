import { useEffect } from 'react'
import { useBoardContext } from '../contexts/BoardContext'
import { Icons } from '../enums/icons'
import { TaskState } from '../types/contexts/boardContextType'
import { StatesSectionType } from '../types/statesSectionType'
import { Item } from './Item'

const StatesSection = ({ label }: StatesSectionType) => {
  const context = useBoardContext()

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
    context?.states.find(s => s?.id === context?.taskStateId)

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
          context?.states.map(s => (
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