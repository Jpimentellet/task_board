import { ReactEventHandler } from 'react'

export interface Props {
  show?: boolean | undefined;
  onCancel?: ReactEventHandler,
  title?: string,
  classes?: string
}