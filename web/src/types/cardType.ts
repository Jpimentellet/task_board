import { OptionalString } from './custom'

export type CardType = {
  id?:          number,
  title?:        string,
  description?: OptionalString,
  leftIconId?:  number | null,
  rightIconId?: number | null,
  onClick?:     () => void,
  background?:   string | null
}