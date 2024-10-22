import { ButtonType } from '../types/buttonType'
import { Icons } from '../enums/icons'
import { IconBox } from './IconBox'

const Button = ({ icon, text }: ButtonType) => {
  return (
    <div className="button">
      <IconBox source={ Icons[icon] } />
      <p>{ text }</p>
    </div>
  )
}

export { Button }