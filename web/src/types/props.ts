import { ReactEventHandler } from 'react'

export interface Props {
  show: boolean | undefined;
  onCancel: ReactEventHandler
}