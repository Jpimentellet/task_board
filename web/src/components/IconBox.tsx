import { IconType } from '../types/iconType'

const IconBox = ({ iconId, onClick }: IconType) => {
  const base = process.env.ICON_URL
  const paths = [
    {
      id: 1,
      path: `${base}/logo.svg`,
    },
    {
      id: 2,
      path: `${base}/close_ring_duotone-1.svg`,
    }
  ]

  const findSource = () => paths.find(p => p.id === iconId)?.path

  return (
    <figure className="icon-box" onClick={ onClick }>
      <img src={ findSource() } alt="icon" />
    </figure>
  )
}

export { IconBox }