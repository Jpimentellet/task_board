import { Popover } from '../../Popover'
import { CategoriesFilter } from './CategoriesFilter'
import { IconsList } from './IconsList'
import { SearchFilter } from './SearchFilter'

const IconsPopover = () => {
  return (
    <div className="icons-popover">
      <Popover>
        <SearchFilter/>
        <CategoriesFilter/>
        <IconsList/>
      </Popover>
    </div>
  )
}

export { IconsPopover }