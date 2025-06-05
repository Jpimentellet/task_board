import { getHexLightenedColor } from '../helpers/styles'
import { CardType } from '../types/cardType'
import { IconBox } from './iconSection/IconBox'

const  Item = ({
  title,
  description,
  leftIconId,
  rightIconId,
  onClick,
  background
}: CardType) => {

  return (
    <div
      className="item"
      onClick={ onClick }
      style={{ backgroundColor: getHexLightenedColor(background) }}
    >
      <div className="left-icon">
        { leftIconId && <IconBox iconId={ leftIconId }/> }
      </div>
      <div className="content">
        <h3>{ title }</h3>
        { description && <p>{ description }</p> }
      </div>
      <div className="right-icon" style={{ backgroundColor: background || '' }}>
        { rightIconId && <IconBox iconId={ rightIconId }/> }
      </div>
    </div>
  )
}

export { Item }