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
        <h1>{ context?.title }</h1>
        <p>{ context?.description }</p>
      </div>
      <figure onClick={ openHeaderForm }>
        <img src="src/assets/edit_duotone.svg"/>
      </figure>
    </div>
  )
}

export { Header }