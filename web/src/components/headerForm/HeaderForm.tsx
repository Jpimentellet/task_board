import { useBoardContext } from '../../contexts/BoardContext'
import { Modal } from '../Modal'
import { DescriptionInput } from './DescriptionInput'
import { TitleInput } from './TitleInput'

const HeaderForm = () => {
  const context = useBoardContext()

  return (
    <Modal
      title='Board details'
      show={ context?.showForm }
      onCancel={ () => context?.setShowForm(false) }
    >
      <TitleInput/>
      <DescriptionInput/>
    </Modal>
  )
}

export { HeaderForm }