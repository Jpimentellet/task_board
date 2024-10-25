import { Icons } from '../../enums/icons'
import { IconBox } from '../IconBox'

const NewStatusButton = () => {
  return (
    <div className="button">
      <IconBox iconId={ Icons.logo }/>
      <p>Add new status</p>
    </div>
  )
}

export { NewStatusButton }