import { useBoardContext } from '../../contexts/BoardContext'
import { Input } from '../Input'

const DescriptionInput = () => {
  const context = useBoardContext()

  return (
    <Input
      label='Description'
      placeholder='Write a short but descriptive description'
      value={ context?.taskDescription || '' }
      setter={ description => context?.setTaskDescription(description) }
    />
  )
}

export { DescriptionInput }