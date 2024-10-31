import { useBoardContext } from '../../contexts/BoardContext'
import { Modal } from '../Modal'
import { TitleInput } from './TitleInput'
import { DescriptionInput } from './DescriptionInput'
import { Actions } from './Actions'

const HeaderForm = () => {
  const context = useBoardContext()

  return (
    <Modal
      classes='header-form'
      title='Board details'
      show={ context?.showHeaderForm }
      onCancel={ () => context?.setShowHeaderForm(false) }
    >
      <TitleInput/>
      <DescriptionInput/>
      <Actions/>
    </Modal>
  )
}

export { HeaderForm }