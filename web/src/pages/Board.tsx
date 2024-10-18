import { List } from '../components/board/List'
import { Header } from '../components/board/Header'
import { BoardContext } from '../contexts/BoardContext'

const Board = () => {
  return (
    <div className="board">
      <BoardContext>
        <Header/>
        <List/>
      </BoardContext>
    </div>
  )
}

export { Board }