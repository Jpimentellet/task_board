import { Icons } from '../../enums/icons'
import { IconBox } from '../IconBox'

const NewStatusButton = () => {
  return (
    <div className="button">
      <IconBox source={ Icons.submit }/>
      <p>Add new status</p>
    </div>
  )
}

export { NewStatusButton }