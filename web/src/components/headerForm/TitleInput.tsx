import { useBoardContext } from '../../contexts/BoardContext'
import { Input } from '../Input'

const TitleInput = () => {
  const context = useBoardContext()

  return (
    <Input
      label='Board name'
      placeholder='Write your Board title'
      value={ context?.title }
      setter={ title => context?.setTitle(title) }
    />
  )
}

export { TitleInput }