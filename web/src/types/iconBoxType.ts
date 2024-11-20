import { ReactEventHandler } from 'react'
import { OptionalString } from './custom'

export type IconBoxType = {
  iconId: number,
  background?: OptionalString,
  onClick?: ReactEventHandler,
  classes?: string
}