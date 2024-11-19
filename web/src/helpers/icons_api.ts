import axios from 'axios'

const iconsApi = axios.create({
  baseURL: '/iconsApi',
  headers: {
    Authorization: `Bearer ${process.env.ICON_API_KEY}`
  }
})

export { iconsApi }