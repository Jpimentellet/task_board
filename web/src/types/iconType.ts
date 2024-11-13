import { ReactEventHandler } from 'react'
import { OptionalString } from './custom'

export type IconType = {
  iconId: number,
  background?: OptionalString,
  onClick?: ReactEventHandler,
  classes?: string
}