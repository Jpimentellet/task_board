import { Button } from "../Button"

const Footer = () => {
  return (
    <div className="footer">
      <Button icon='add' text='Add task' />
      <Button icon='submit' text="Add status" />
    </div>
  )
}

export { Footer }