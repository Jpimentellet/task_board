const Header = () => {
  return (
    <div className="header">
      <figure>
        <img src="src/assets/logo.svg"/>
      </figure>
      <div>
        <h1>My Board</h1>
        <p>Task to do today</p>
      </div>
      <figure>
        <img src="src/assets/edit_duotone.svg"/>
      </figure>
    </div>
  )
}

export { Header }