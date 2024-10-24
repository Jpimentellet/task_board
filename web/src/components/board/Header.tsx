import { useBoardContext } from '../../contexts/BoardContext'

const Header = () => {
  const context = useBoardContext()

  const openHeaderForm = () => context?.setShowForm(true)

  return (
    <div className="header">
      <figure>
        <img src="src/assets/logo.svg"/>
      </figure>
      <div>
        <h1>My Board</h1>
        <p>Task to do today</p>
      </div>
      <figure onClick={ openHeaderForm }>
        <img src="src/assets/edit_duotone.svg"/>
      </figure>
    </div>
  )
}

export { Header }