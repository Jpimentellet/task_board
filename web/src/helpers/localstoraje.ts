import { LocalStorageTypes } from '../types/localstorage'

const setItem = (key: string, value: LocalStorageTypes) =>
  localStorage.setItem(key, JSON.stringify(value))

const getItem = (key: string) => {
  const value = localStorage.getItem(key)
  return value ? JSON.parse(value) : null
}


export { setItem, getItem }