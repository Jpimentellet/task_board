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
    <div className="item" onClick={ onClick }>
      <div
        className="left-icon"
        style={{ backgroundColor: background || '' }}
      >
        { leftIconId && <IconBox iconId={ leftIconId }/> }
      </div>
      <div className="content">
        <h3>{ title }</h3>
        { description && <p>{ description }</p> }
      </div>
      <div className="right-icon">
        { rightIconId && <IconBox iconId={ rightIconId }/> }
      </div>
    </div>
  )
}

export { Item }