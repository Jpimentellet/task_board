import { CardType } from '../cardType'

export type BoardContextType = {
  tasks: CardType[],
  showForm: boolean,
  setShowForm: (showForm: boolean) => void
} | null