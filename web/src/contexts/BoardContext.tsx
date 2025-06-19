import { createContext, PropsWithChildren, useContext, useState } from 'react'
import { OptionalNumber } from '../types/custom'
import { Icons } from '../enums/icons'
import {
  BoardContextType,
  Task,
  TaskState
} from '../types/contexts/boardContextType'

const context = createContext<BoardContextType>(null)

const BoardContext = ({ children }: PropsWithChildren) => {
  const [showHeaderForm,   setShowHeaderForm] = useState(false)
  const [showTaskForm,       setShowTaskForm] = useState(false)
  const [showDeleteTask,   setShowDeleteTask] = useState(false)
  const [title,                     setTitle] = useState('My Board')
  const [description,         setDescription] = useState('Tasks to do today!')
  const [taskId,                   setTaskId] = useState<OptionalNumber>(null)
  const [taskName,               setTaskName] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskIconId,           setTaskIconId] = useState<OptionalNumber>(null)
  const [taskStateId,         setTaskStateId] = useState<OptionalNumber>(null)
  const [taskState, setTaskState] = useState<TaskState>(null)

  const tasks: Task[] = [
    {
      id: 1,
      title: 'Task in progress',
      description: 'Improve in my skrills about programing',
      taskIconId: null,
      taskStateId: 1
    },
    {
      id: 2,
      title: 'Task completed',
      description: null,
      taskIconId: 1,
      taskStateId: 4
    },
    {
      id: 3,
      title: 'Task wont do',
      description: null,
      taskIconId: null,
      taskStateId: 3
    },
    {
      id: 4,
      title: 'Task to do',
      description: 'Improve in my skrills about programing',
      taskIconId: 1,
      taskStateId: null
    }
  ]

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

  const getNewTask = () => ({
    name:        taskName,
    description: taskDescription,
    iconId:      taskIconId,
    stateId:     taskStateId
  })

  const save = () => {
    console.log(getNewTask())
  }

  const openEditForm = (task: Task) => {
    setTaskId(task.id || null)
    setTaskName(task.title || '')
    setTaskDescription(task.description || '')
    setTaskIconId(task.taskIconId || null)
    setTaskStateId(task.taskStateId || null)
    setShowTaskForm(true)
  }

  const closeTaskForm = () => {
    setShowTaskForm(false)
    if (!taskId) return
    cleanTaskForm()
  }

  const cleanTaskForm = () => {
    setTaskId(null)
    setTaskName('')
    setTaskDescription('')
    setTaskIconId(null)
    setTaskStateId(null)
  }

  return (
    <context.Provider value={{
      tasks,
      states,
      showHeaderForm,
      setShowHeaderForm,
      showTaskForm,
      setShowTaskForm,
      showDeleteTask,
      setShowDeleteTask,
      title,
      setTitle,
      description,
      setDescription,
      taskId,
      setTaskId,
      taskName,
      setTaskName,
      taskDescription,
      setTaskDescription,
      taskIconId,
      setTaskIconId,
      taskStateId,
      setTaskStateId,
      taskState,
      setTaskState,
      save,
      openEditForm,
      closeTaskForm
    }}>
      { children }
    </context.Provider>
  )
}

const useBoardContext = () => useContext(context)

// eslint-disable-next-line react-refresh/only-export-components
export { BoardContext, useBoardContext }