import { ReactEventHandler } from 'react'
import { OptionalString } from './custom'

export type IconBoxType = {
  iconId?:      number,
  source?:      string,
  background?: OptionalString,
  onClick?:    ReactEventHandler,
  classes?:    string
}