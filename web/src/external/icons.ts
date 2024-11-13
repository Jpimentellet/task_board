import { iconsApi } from '../helpers/icons_api'

const getCategories = async () => {
  const { data } = await iconsApi.get('/categories')
  return data
}

const getIcons = async (params: string = '') => {
  const { data } = await iconsApi.get(`/icons/search${params}`)
  return data
}

const getIconSets = async () => {
  const { data } = await iconsApi.get('/iconsets?premium=0')
  return data
}

const getIconsByIconSetId = async (iconSetId: number) => {
  const { data } = await iconsApi.get(`/iconsets/${iconSetId}/icons`)
  return data
}


export { getCategories, getIcons, getIconSets, getIconsByIconSetId }