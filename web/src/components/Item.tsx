import { CardType } from '../types/cardType'
import { IconBox } from './iconSection/IconBox'

const Item = ({ title, description, leftIconId, rightIconId }: CardType) => {
  return (
    <div className="item">
      { leftIconId ? <IconBox iconId={ leftIconId }/> : <></> }
      <div className="content">
        <h3>{ title }</h3>
        { description ? <p>{ description }</p>  : <></> }
      </div>
      { rightIconId ? <IconBox iconId={ rightIconId }/> : <></> }
    </div>
  )
}

export { Item }