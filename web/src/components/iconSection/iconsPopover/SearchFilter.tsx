import { useIconSectionContext } from '../../../contexts/IconSectionContext'
import { Input } from '../../Input'

const SearchFilter = () => {
  const context = useIconSectionContext()

  return (
    <Input
      placeholder='Which icon could be good?'
      value={ context?.searchFilterInput || '' }
      setter={ text => context?.setSearchFilterInput(text) }
    />
  )
}

export { SearchFilter }