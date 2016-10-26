import axios from 'axios'
import { apiUrl } from 'config'

const api = axios.create({ baseURL: apiUrl })

export const request = (config) => api.request(config)

;['delete', 'get', 'head'].forEach((method) => {
  module.exports[method] = (url, config) => request({ ...config, method, url })
})

;['post', 'put', 'patch'].forEach((method) => {
  module.exports[method] = (url, data, config) => request({ ...config, method, url, data })
})

export default module.exports
