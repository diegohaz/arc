import axios from 'axios'

const request = jest.fn()
axios.create = jest.fn(() => ({ request }))

const api = require('.').default

beforeEach(() => {
  request.mockClear()
})

test('get', () => {
  expect(request).not.toBeCalled()
  api.get('/test', { foo: 'bar' })
  expect(request).toBeCalledWith({
    method: 'get',
    url: '/test',
    foo: 'bar'
  })
})

test('post', () => {
  expect(request).not.toBeCalled()
  api.post('/test', { title: 'test' }, { foo: 'bar' })
  expect(request).toBeCalledWith({
    method: 'post',
    url: '/test',
    foo: 'bar',
    data: { title: 'test' }
  })
})
