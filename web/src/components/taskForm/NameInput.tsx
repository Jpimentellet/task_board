import { useBoardContext } from '../../contexts/BoardContext'
import { Input } from '../Input'

const NameInput = () => {
  const context = useBoardContext()

  return (
    <Input
      label='Name'
      placeholder='Task name'
      value={ context?.taskName }
      setter={ name => context?.setTaskName(name) }
    />
  )
}

export { NameInput }