import { IconType } from '../types/iconType'

const IconBox = ({ source }: IconType) => {
  return (
    <figure className="icon-box">
      <img src={ source || undefined } alt="icon" />
    </figure>
  )
}

export { IconBox }