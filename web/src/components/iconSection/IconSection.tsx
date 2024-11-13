import { IconSectionType } from '../../types/iconSectionType'
import { UsedIconsList } from './UsedIconsList'

const IconSection = ({ label }: IconSectionType) => {

  return (
    <div className="icon-section">
      { label && <label htmlFor="input">{ label }</label> }
      <UsedIconsList/>
    </div>
  )
}

export { IconSection }