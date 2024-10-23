import { NewStatusButton } from './NewStatusButton'
import { NewTaskButton } from './NewTaskButton'

const Footer = () => {
  return (
    <div className="footer">
      <NewTaskButton/>
      <NewStatusButton/>
    </div>
  )
}

export { Footer }