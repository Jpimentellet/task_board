import { CardType } from '../cardType'
import { Dispatch, SetStateAction } from 'react'
import { OptionalNumber } from '../custom'

export type TaskState = {
  id:      number,
  name:    string,
  iconId?: number,
  color?:  string
} | null

export type BoardContextType = {
  showHeaderForm:     boolean,
  tasks:              CardType[],
  showTaskForm:       boolean,
  title:              string,
  description:        string,
  taskId:             OptionalNumber,
  taskName:           string,
  taskDescription:    string,
  taskIconId:         OptionalNumber,
  taskStateId:        OptionalNumber,
  taskState:          TaskState,
  setShowHeaderForm:  Dispatch<SetStateAction<boolean>>,
  setShowTaskForm:    Dispatch<SetStateAction<boolean>>,
  setTitle:           Dispatch<SetStateAction<string>>,
  setDescription:     Dispatch<SetStateAction<string>>,
  setTaskId:          Dispatch<SetStateAction<OptionalNumber>>,
  setTaskName:        Dispatch<SetStateAction<string>>,
  setTaskDescription: Dispatch<SetStateAction<string>>,
  setTaskIconId:      Dispatch<SetStateAction<OptionalNumber>>,
  setTaskStateId:     Dispatch<SetStateAction<OptionalNumber>>,
  setTaskState:       Dispatch<SetStateAction<TaskState>>,
  save:               () => void,
  openEditForm:       (task: CardType) => void,
  closeTaskForm:      () => void
} | null