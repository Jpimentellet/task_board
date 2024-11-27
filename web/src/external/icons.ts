import { iconsApi } from '../helpers/icons_api'
import {
  formatCategories
} from '../serializers/iconSectionSerializer/categories'
import { formatIcons } from '../serializers/iconSectionSerializer/icons'

const getIconsCategories = async () =>
  iconsApi.get('/categories')
    .then(({ data }) => formatCategories(data.categories))
    .catch(error => { throw error })

const getAvailableIcons = (params: string = '') =>
  iconsApi.get(`/icons/search?${params}`)
    .then(({ data }) => formatIcons(data.icons))
    .catch(error => { throw error })

const getIconSets = () =>
  iconsApi.get('/iconsets?premium=0')
    .then(({ data }) => data)
    .catch(error => { throw error })

const getIconsByIconSetId = (iconSetId: number) =>
  iconsApi.get(`/iconsets/${iconSetId}/icons`)
  .then(({ data }) => data)
  .catch(error => { throw error })


export {
  getIconsCategories,
  getAvailableIcons,
  getIconSets,
  getIconsByIconSetId
}