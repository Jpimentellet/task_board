import { CardType } from '../cardType'
import { Dispatch, SetStateAction } from 'react'

export type BoardContextType = {
  description:    string,
  showForm:       boolean,
  tasks:          CardType[],
  title:          string,
  setShowForm:    Dispatch<SetStateAction<boolean>>,
  setTitle:       Dispatch<SetStateAction<string>>,
  setDescription: Dispatch<SetStateAction<string>>
} | null