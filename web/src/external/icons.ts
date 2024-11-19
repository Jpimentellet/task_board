import { iconsApi } from '../helpers/icons_api'

const getIconsCategories = async () =>
  iconsApi.get('/categories')
    .then(({ data }) => data.categories)
    .catch(error => { throw error })

const getIcons = (params: string = '') =>
  iconsApi.get(`/icons/search${params}`)
    .then(({ data }) => data)
    .catch(error => { throw error })

const getIconSets = () =>
  iconsApi.get('/iconsets?premium=0')
    .then(({ data }) => data)
    .catch(error => { throw error })

const getIconsByIconSetId = (iconSetId: number) =>
  iconsApi.get(`/iconsets/${iconSetId}/icons`)
  .then(({ data }) => data)
  .catch(error => { throw error })


export { getIconsCategories, getIcons, getIconSets, getIconsByIconSetId }