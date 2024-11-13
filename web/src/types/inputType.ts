import { Dispatch, SetStateAction } from 'react'

export type InputType = {
  label?: string,
  placeholder?: string,
  value: string,
  setter: Dispatch<SetStateAction<string>>
}