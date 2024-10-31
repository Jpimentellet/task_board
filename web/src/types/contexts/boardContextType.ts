import { CardType } from '../cardType'
import { Dispatch, SetStateAction } from 'react'

export type BoardContextType = {
  showHeaderForm:    boolean,
  tasks:             CardType[],
  showTaskForm:      boolean,
  title:             string,
  description:       string,
  taskName:          string,
  setShowHeaderForm: Dispatch<SetStateAction<boolean>>,
  setShowTaskForm:   Dispatch<SetStateAction<boolean>>,
  setTitle:          Dispatch<SetStateAction<string>>,
  setDescription:    Dispatch<SetStateAction<string>>,
  setTaskName:       Dispatch<SetStateAction<string>>
} | null