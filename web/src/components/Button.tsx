import { ButtonType } from '../types/buttonType'
import { IconBox } from './iconSection/IconBox'

const Button = ({ text, iconId, onClick }: ButtonType) => {

  return (
    <div id="button" onClick={ onClick }>
      <p>{ text }</p>
      { iconId && <IconBox iconId={ iconId }/> }
    </div>
  )
}

export { Button }