import { BoardContext } from '../contexts/BoardContext'
import { Footer       } from '../components/board/Footer'
import { Header       } from '../components/board/Header'
import { List         } from '../components/board/List'
import { HeaderForm } from '../components/headerForm/HeaderForm'
import { TaskForm } from '../components/taskForm/TaskForm'

const Board = () => {
  return (
    <div className="board">
      <BoardContext>
        <Header/>
        <List/>
        <Footer/>
        <HeaderForm/>
        <TaskForm/>
      </BoardContext>
    </div>
  )
}

export { Board }