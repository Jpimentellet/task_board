import { CardType } from '../types/cardType'
import { IconBox } from './IconBox'

const Item = ({ title, description, leftIconUrl, rightIconUrl }: CardType) => {
  return (
    <div className="item">
      { leftIconUrl ? <IconBox source={ leftIconUrl }/> : <></> }
      <div className="content">
        <h3>{ title }</h3>
        { description ? <p>{ description }</p>  : <></> }
      </div>
      { rightIconUrl ? <IconBox source={ rightIconUrl }/> : <></> }
    </div>
  )
}

export { Item }