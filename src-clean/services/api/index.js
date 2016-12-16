import axios from 'axios'

const facade = {}

const api = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com' })

facade.request = (config) => api.request(config)

;['delete', 'get', 'head'].forEach((method) => {
  facade[method] = (url, config) => facade.request({ ...config, method, url })
})

;['post', 'put', 'patch'].forEach((method) => {
  facade[method] = (url, data, config) => facade.request({ ...config, method, url, data })
})

export default facade
