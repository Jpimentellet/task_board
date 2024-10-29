import { useBoardContext } from '../../contexts/BoardContext'
import { TextArea } from '../TextArea'

const DescriptionInput = () => {
  const context = useBoardContext()

  return (
    <TextArea
      label='Description'
      value={ context?.description }
      setter={ description => context?.setDescription(description) }
      placeholder='Write board description'
    />
  )
}

export { DescriptionInput }