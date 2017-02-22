import fetch from 'isomorphic-fetch'
import { apiUrl } from 'config'

const api = {}
const headers = {}

api.request = (endpoint, method, settings, body) => {
  const url = (endpoint.indexOf(apiUrl) === -1) ? apiUrl + endpoint : endpoint

  return fetch(url, api.configureRequest(method, settings, body))
    .then(api.checkStatus)
    .then(response => response)
    .catch(error => Promise.reject(error))
}

api.configureRequest = (method = 'GET', settings = {}, body = null) => {
  headers.Accept = 'application/json'
  headers['Content-Type'] = 'application/json'
  if (settings.accessToken) { headers.Authorization = `Bearer ${settings.accessToken}` }
  if (settings.locale) { headers['Accept-Language'] = settings.locale }

  const fetchInit = { method, headers }

  if (body) { fetchInit.body = JSON.stringify(body) }

  return fetchInit
}

api.checkStatus = (response) => {
  if (response.ok) {
    return response.json()
  }

  return response.json()
    .then((error) => {
      throw new Error(`${response.statusText} (${response.status}) error occurred downstream: ${error.message}`)
    })
}

api.setToken = token => (headers.Authorization = `Bearer ${token}`)
api.unsetToken = () => (headers.Authorization = null)

;['delete', 'get', 'head'].forEach((method) => {
  api[method] = (url, settings) => api.request(url, method, settings)
})

;['post', 'put', 'patch'].forEach((method) => {
  api[method] = (url, data, settings) => api.request(url, method, settings, data)
})

export default api
