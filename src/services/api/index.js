import axios from 'axios'

const api = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com' })

export const request = (config) => api.request(config)

;['delete', 'get', 'head'].forEach((method) => {
  module.exports[method] = (url, config) => request({ ...config, method, url })
})

;['post', 'put', 'patch'].forEach((method) => {
  module.exports[method] = (url, data, config) => request({ ...config, method, url, data })
})

export default module.exports
