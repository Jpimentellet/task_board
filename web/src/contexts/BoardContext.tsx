import { createContext, PropsWithChildren, useContext, useState } from 'react'
import { BoardContextType } from '../types/contexts/boardContextType'
import { CardType } from '../types/cardType'

const context = createContext<BoardContextType>(null)

const BoardContext = ({ children }: PropsWithChildren) => {
  const [showForm, setShowForm] = useState(false)
  const tasks: CardType[] = [
    {
      id: 1,
      title: 'Task in progress',
      description: 'Improve in my skrills about programing',
      leftIconUrl: null,
      rightIconUrl: 'src/assets/logo.svg'
    },
    {
      id: 2,
      title: 'Task completed',
      description: null,
      leftIconUrl: 'src/assets/logo.svg',
      rightIconUrl: null
    },
    {
      id: 3,
      title: 'Task wont do',
      description: null,
      leftIconUrl: null,
      rightIconUrl: null
    },
    {
      id: 4,
      title: 'Task to do',
      description: 'Improve in my skrills about programing',
      leftIconUrl: 'src/assets/logo.svg',
      rightIconUrl: null
    }
  ]

  return (
    <context.Provider value={{
      tasks,
      showForm,
      setShowForm
    }}>
      { children }
    </context.Provider>
  )
}

const useBoardContext = () => useContext(context)

// eslint-disable-next-line react-refresh/only-export-components
export { BoardContext, useBoardContext }