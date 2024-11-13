import axios from 'axios'

const iconsApi = axios.create({
  baseURL: process.env.ICON_URL,
  headers: { Authorization: `Bearer ${process.env.ICON_API_KEY}` }
})

export { iconsApi }