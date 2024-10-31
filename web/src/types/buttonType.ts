import { ReactEventHandler } from 'react'

export type ButtonType = {
  text: string,
  iconId?: number,
  onClick: ReactEventHandler
}