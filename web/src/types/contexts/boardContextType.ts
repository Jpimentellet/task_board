import { CardType } from '../cardType'
import { Dispatch, SetStateAction } from 'react'
import { OptionalNumber } from '../custom'

export type BoardContextType = {
  showHeaderForm:     boolean,
  tasks:              CardType[],
  showTaskForm:       boolean,
  title:              string,
  description:        string,
  taskId:             OptionalNumber,
  taskName:           string,
  taskDescription:    string,
  setShowHeaderForm:  Dispatch<SetStateAction<boolean>>,
  setShowTaskForm:    Dispatch<SetStateAction<boolean>>,
  setTitle:           Dispatch<SetStateAction<string>>,
  setDescription:     Dispatch<SetStateAction<string>>,
  setTaskId:          Dispatch<SetStateAction<OptionalNumber>>,
  setTaskName:        Dispatch<SetStateAction<string>>,
  setTaskDescription: Dispatch<SetStateAction<string>>
} | null