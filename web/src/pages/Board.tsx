import { BoardContext } from '../contexts/BoardContext'
import { Footer       } from '../components/board/Footer'
import { Header       } from '../components/board/Header'
import { List         } from '../components/board/List'

const Board = () => {
  return (
    <div className="board">
      <BoardContext>
        <Header/>
        <List/>
        <Footer/>
      </BoardContext>
    </div>
  )
}

export { Board }