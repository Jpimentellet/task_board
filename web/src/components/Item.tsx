import { CardType } from '../types/cardType'
import { IconBox } from './IconBox'

const Item = ({ title, description, leftIconUrl, rightIconUrl }: CardType) => {
  return (
    <div className="item">
      <IconBox source={ leftIconUrl }/>
      <div>
        <h3>{ title }</h3>
        <p>{ description }</p>
      </div>
      <IconBox source={ rightIconUrl }/>
    </div>
  )
}

export { Item }