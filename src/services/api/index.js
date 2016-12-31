import axios from 'axios'
import { apiUrl } from 'config'

const facade = {}

const api = axios.create({ baseURL: apiUrl })

facade.request = (config) => api.request(config)

;['delete', 'get', 'head'].forEach((method) => {
  facade[method] = (url, config) => facade.request({ ...config, method, url })
})

;['post', 'put', 'patch'].forEach((method) => {
  facade[method] = (url, data, config) => facade.request({ ...config, method, url, data })
})

export default facade
