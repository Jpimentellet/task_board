import { ButtonType } from '../types/buttonType'
import { IconBox } from './iconSection/IconBox'

const Button = ({ text, iconId, classes, onClick }: ButtonType) => {

  return (
    <div id="button" className={ classes }  onClick={ onClick }>
      <p>{ text }</p>
      { iconId && <IconBox iconId={ iconId }/> }
    </div>
  )
}

export { Button }