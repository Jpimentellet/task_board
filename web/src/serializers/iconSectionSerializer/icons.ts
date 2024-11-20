import { AvailableIconsType } from '../../types/requests/icons'

const formatIcons = (icons: AvailableIconsType[]) => icons.map(i => ({
  id: i.icon_id,
  tags: i.tags,
  url: i.raster_sizes[0].formats[0].preview_url
}))

export { formatIcons }