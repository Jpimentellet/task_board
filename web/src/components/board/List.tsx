import { useBoardContext } from '../../contexts/BoardContext'
import { Item } from '../Item'

const List = () => {
  const context = useBoardContext()

  return (
    <div className='list'>
      {
        context?.tasks.map(t => (
          <Item
            key={ t.id }
            title={ t.title }
            description={ t.description }
            leftIconUrl={ t.leftIconUrl }
            rightIconUrl={ t.rightIconUrl }
          />
        ))
      }
    </div>
  )
}

export { List }