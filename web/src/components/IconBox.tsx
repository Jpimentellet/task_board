import { IconType } from '../types/iconType'

const IconBox = ({ source, background }: IconType) => {
  return (
    <figure className="icon">
      <img src={ source || undefined } alt="icon" />
    </figure>
  )
}

export { IconBox }