import { OptionalString } from './custom'

export type CardType = {
  id?:           number,
  title:        string,
  description:  OptionalString,
  leftIconUrl:  OptionalString,
  rightIconUrl: OptionalString
}