import { BoardContext       } from '../contexts/BoardContext'
import { IconSectionContext } from '../contexts/IconSectionContext'
import { Header        } from '../components/board/Header'
import { List          } from '../components/board/List'
import { NewTaskButton } from '../components/board/NewTaskButton'
import { HeaderForm    } from '../components/headerForm/HeaderForm'
import { TaskForm      } from '../components/taskForm/TaskForm'

const Board = () => {
  return (
    <div className="board">
      <BoardContext>
        <IconSectionContext>
          <Header/>
          <List/>
          <NewTaskButton/>
          <HeaderForm/>
          <TaskForm/>
        </IconSectionContext>
      </BoardContext>
    </div>
  )
}

export { Board }