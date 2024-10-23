import { ButtonType } from '../types/buttonType'
import { Icons } from '../enums/icons'
import { IconBox } from './IconBox'

const Button = ({ icon, text }: ButtonType) => {
  return (
    <div className="button">
      <p>{ text }</p>
      <IconBox source={ Icons[icon] } />
    </div>
  )
}

export { Button }