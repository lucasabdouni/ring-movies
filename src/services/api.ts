import axios from 'axios'
import 'dotenv'

const api = axios.create({
  baseURL: 'https://the-one-api.dev/v2',
})

const token = 'Rv6fzOLC1rlzJnesAmBL'

api.interceptors.request.use(
  async (config) => {
    config.headers.Authorization = `Bearer ${token}`

    return config
  },
  (error) => {
    console.log(error)
  },
)

export default api
