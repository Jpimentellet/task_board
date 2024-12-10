import { Icons } from '../enums/icons'
import { StatesSectionType } from '../types/statesSectionType'
import { Item } from './Item'

const StatesSection = ({ label }: StatesSectionType) => {
  const states = [
    {
      name: 'In progress',
      iconId: Icons.inprogress
    },
    {
      name: 'Paused',
      iconId: Icons.paused
    },
    {
      name: 'Canceled',
      iconId: Icons.canceled
    },
    {
      name: 'Completed',
      iconId: Icons.completed
    }
  ]

  return (
    <div className="states-section">
      { label && <label> { label } </label> }
      <div className="states">
        {
          states.map(s => (
            <Item
              key={ s.iconId }
              title={ s.name }
              leftIconId={ s.iconId }

            />
          ))
        }
      </div>
    </div>
  )
}

export { StatesSection }