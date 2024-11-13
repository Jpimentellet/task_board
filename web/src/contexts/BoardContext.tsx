import { createContext, PropsWithChildren, useContext, useState } from 'react'
import { BoardContextType } from '../types/contexts/boardContextType'
import { CardType } from '../types/cardType'
import { OptionalNumber } from '../types/custom'

const context = createContext<BoardContextType>(null)

const BoardContext = ({ children }: PropsWithChildren) => {
  const [showHeaderForm,   setShowHeaderForm] = useState(false)
  const [showTaskForm,       setShowTaskForm] = useState(false)
  const [title,                     setTitle] = useState('My Board')
  const [description,         setDescription] = useState('Tasks to do today!')
  const [taskId,                   setTaskId] = useState<OptionalNumber>(null)
  const [taskName,               setTaskName] = useState('')
  const [taskDescription, setTaskDescription] = useState('')

  const tasks: CardType[] = [
    {
      id: 1,
      title: 'Task in progress',
      description: 'Improve in my skrills about programing',
      leftIconId: null,
      rightIconId: 1
    },
    {
      id: 2,
      title: 'Task completed',
      description: null,
      leftIconId: 1,
      rightIconId: null
    },
    {
      id: 3,
      title: 'Task wont do',
      description: null,
      leftIconId: null,
      rightIconId: null
    },
    {
      id: 4,
      title: 'Task to do',
      description: 'Improve in my skrills about programing',
      leftIconId: 1,
      rightIconId: null
    }
  ]

  return (
    <context.Provider value={{
      tasks,
      showHeaderForm,
      setShowHeaderForm,
      showTaskForm,
      setShowTaskForm,
      title,
      setTitle,
      description,
      setDescription,
      taskId,
      setTaskId,
      taskName,
      setTaskName,
      taskDescription,
      setTaskDescription
    }}>
      { children }
    </context.Provider>
  )
}

const useBoardContext = () => useContext(context)

// eslint-disable-next-line react-refresh/only-export-components
export { BoardContext, useBoardContext }